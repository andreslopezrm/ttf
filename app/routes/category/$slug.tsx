import { useEffect, useState } from "react";
import { Category, Questionnaire } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { CategoryQuestionnaireItem } from "~/components/category/questionnaire-item";
import { PER_PAGE_CATEGORY_QUESTIONNAIRES } from "~/utils/constants";
import { getAuth } from "@clerk/remix/ssr.server";

type LoaderTypeData = {
    initialQuestionnaires: Questionnaire[];
    category: Category;
    slug: string;
    total: number;
    userId: string | null; 
}

type FetcherData = {
    questionnaires: Questionnaire[];
}

export const loader: LoaderFunction = async ({ request, params }) => {
    const { slug } = params;

    const take = PER_PAGE_CATEGORY_QUESTIONNAIRES; 
    const skip = 0;

    const category = await db.category.findFirst({
        where: { slug }
    });

    if(!category) {
        return redirect("/404");
    }

    const { userId } = await getAuth(request);
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

    return { slug, category, total, initialQuestionnaires, userId };
}

export default function CategoryPage() {

    const { category, initialQuestionnaires, total, userId } = useLoaderData<LoaderTypeData>();
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
        <section className="container m-0 mx-auto">
            <div className="px-8">
                <h1 className="mt-12 text-3xl mb-8 font-extrabold">Category: {name}</h1>
                <div> 
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Questionnaire name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {questionnaires.map(questionnaire => (
                                <CategoryQuestionnaireItem key={questionnaire.id} questionnaire={questionnaire} userId={userId} />
                            ))} 
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8">
                        { questionnaires.length < total 
                            ? <button disabled={fetcher.state === "submitting"} type="submit" onClick={handleOnMore} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <span className="relative px-12 py-3.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    {fetcher.state === "submitting" ? "Load more..." : "Load more"} 
                                </span>
                            </button>
                            : null }
                    </div> 
                </div>
            </div>
        </section>
    );
}