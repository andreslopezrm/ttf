import { useEffect, useState } from "react";
import { Category, Questionnaire } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { CategoryQuestionnaireItem } from "~/components/category/questionnaire-item";
import { PER_PAGE_CATEGORY_QUESTIONNAIRES } from "~/utils/constants";

type LoaderTypeData = {
    initialQuestionnaires: Questionnaire[];
    category: Category;
    slug: string;
    total: number;
}

type FetcherData = {
    questionnaires: Questionnaire[];
}

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params;

    const take = PER_PAGE_CATEGORY_QUESTIONNAIRES; 
    const skip = 0;

    const category = await db.category.findFirst({
        where: { slug }
    });

    if(!category) {
        return redirect("/404");
    }

    const { id: categoryId } = category;

    const totalQuery = db.questionnaire.count({
        where: { 
            categoryId,
            active: true
         }
    });


    const initialQuestionnairesQuery =  db.questionnaire.findMany({
        skip,
        take,
        where: {
            categoryId,
            active: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const [total, initialQuestionnaires] = await Promise.all([totalQuery, initialQuestionnairesQuery]);

    return { slug, category, total, initialQuestionnaires };
}

export default function CategoryPage() {

    const { category, initialQuestionnaires, total } = useLoaderData<LoaderTypeData>();
    const [questionnaires, setQuestionnaires] = useState(initialQuestionnaires);
    
    const [offset, setOffset] = useState(0);
    const { name, id: categoryId } = category;

    const fetcher = useFetcher();

    useEffect(() => {
        if(!fetcher.data) {
            return;
        }

        const { questionnaires: newQuestionnaires } = fetcher.data as FetcherData;
        setQuestionnaires([...questionnaires, ...newQuestionnaires]);

    }, [fetcher.data]);

    const handleOnMore = () => {
        const newOffset = offset + PER_PAGE_CATEGORY_QUESTIONNAIRES;
        fetcher.load(`/api/category/${categoryId}/questionnaires?offset=${newOffset}&per_page=${PER_PAGE_CATEGORY_QUESTIONNAIRES}`);
        setOffset(newOffset);
    }
    
    return (
        <div className="container m-0 mx-auto">
            <div className="px-8">
                <h1>{name} {total}</h1>
                <div>
                    {questionnaires.map(questionnaire => (
                        <CategoryQuestionnaireItem key={questionnaire.id} questionnaire={questionnaire} />
                    ))}
                    <div>
                        { questionnaires.length < total 
                            ? <button 
                                disabled={fetcher.state === "submitting"} 
                                type="submit" 
                                onClick={handleOnMore}>
                                    {fetcher.state === "submitting" ? "Load more..." : "Load more"} 
                                </button> 
                            : null }
                    </div> 
                </div>
            </div>
        </div>
    );
}