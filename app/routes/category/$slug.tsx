import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Category, Questionnaire } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { CategoryQuestionnaireItem } from "~/components/category/questionnaire-item";
import { getAuth } from "@clerk/remix/ssr.server";
import { PER_PAGE_CATEGORY_QUESTIONNAIRES } from "~/utils/constants";
import { generateQuestionnairesExt, QuestionnaireExtended } from "~/utils/questionnaire";

type LoaderTypeData = {
    category: Category;
    slug: string;
    userId: string | null; 
    resolved: string[];
    baseUrl: string;
}

type FetcherData = {
    total: number;
    search: string | null;
    skip: number;
    take: number;
    questionnaires: Questionnaire[];
}

export const loader: LoaderFunction = async ({ request, params }) => {
    const { slug } = params;

    const category = await db.category.findFirst({
        where: { slug }
    });

    if(!category) {
        return redirect("/404");
    }

    const { userId } = await getAuth(request);

    let resolved: string[] = [];
    if(userId) {
        const userResolved = await db.resolve.findMany({
            where: {
                userId
            },
            select: {
                questionnaireId: true
            }
        });
        resolved = userResolved.map(resolve => resolve.questionnaireId);
    }
   
    const baseUrl = process.env.BASE_URL;

    return { slug, category, userId, resolved, baseUrl };
}

export default function CategoryPage() {

    const { category, userId, resolved, baseUrl } = useLoaderData<LoaderTypeData>();
    const [questionnaires, setQuestionnaires] = useState<QuestionnaireExtended[]>([]);
    
    const [offset, setOffset] = useState(0);
    const [search, setSeach] = useState("");
    const { name, id: categoryId } = category;

    const fetcher = useFetcher();

    useEffect(() => load(), []);

    useEffect(() => {
        if(!fetcher.data) {
            return;
        }

        const { skip, questionnaires: paginQuestionnaires } = fetcher.data as FetcherData;
        if(skip === 0) {
            setQuestionnaires(generateQuestionnairesExt(paginQuestionnaires, userId, resolved));
        } else {
            setQuestionnaires([...questionnaires, ...generateQuestionnairesExt(paginQuestionnaires, userId, resolved)]);
        }
    }, [fetcher.data]);

    useEffect(() => {
        if(search === "") {
            obtaintWithResetOffset();
        }
    }, [search]);

    const handleOnMore = () => {
        const offsetMore = offset + PER_PAGE_CATEGORY_QUESTIONNAIRES;
        load(offsetMore);
        setOffset(offsetMore);
    }

    const handleOnChageSearch = (event: ChangeEvent<HTMLInputElement>) => setSeach(event.target.value);
    
    const handleOnSearch = (event: FormEvent) => {
        event.preventDefault();
        obtaintWithResetOffset();
    }

    const load = (currenOffset: number = 0) => {
        const params = new URLSearchParams();
        params.append("category_id", categoryId);
        params.append("offset", currenOffset.toString());
        params.append("search", search);

        fetcher.load(`/api/questionnaires?${params.toString()}`);
    }

    const obtaintWithResetOffset = () => {
        const offsetReset = 0;
        load(offsetReset);
        setOffset(offsetReset);
    }
    
    return (
        <section className="container m-0 mx-auto">
            <div className="px-8">
                <div className="md:flex md:justify-between md:items-center">
                    <h1 className="mt-12 text-3xl mb-8 font-extrabold">Category: {name}</h1>
                    
                    <form onSubmit={handleOnSearch} className="mb-8 md:mb-0">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="search" name="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required onChange={handleOnChageSearch} />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-2">Search</button>
                        </div>
                    </form>
                </div>
                <div> 
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                questionnaires.length > 0 
                                ? questionnaires.map(questionnaire => (
                                    <CategoryQuestionnaireItem key={questionnaire.id} questionnaire={questionnaire} baseUrl={baseUrl} />
                                ))
                                : <tr>
                                    <td colSpan={2}>
                                        <div className="flex justify-center mt-8">
                                            <div>
                                                <figure>
                                                    <img src="/img/empty.png" alt="empty" width="50" />
                                                </figure>
                                                <p className="text-lg text-slate-600 font-light">Empty</p>
                                            </div>
                                        </div>
                                    </td>
                                  </tr>
                            } 
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8">
                        { questionnaires.length < fetcher?.data?.total 
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