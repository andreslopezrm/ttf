import dayjs from "dayjs";
import { getAuth } from "@clerk/remix/ssr.server";
import { Category, Questionnaire } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PER_PAGE_OWN_QUESTIONNAIRES } from "~/utils/constants";
import { db } from "~/utils/db.server";
import { getQueryIntParameter, getQueryStringParameter } from "~/utils/params.server";
import { shareTwitterUrl } from "~/utils/share";

type LoaderTypeData = {
    total: number;
    offset: number;
    hasPrev: boolean, 
    hasNext: boolean;
    questionnaries: (Questionnaire & { category: Category })[];
    baseUrl: string;
    search: string | null;
}

type FilterData = {
    userId: string;
    questionnaire?: {
        name: {
            contains: string;
        }
    }
}

export const loader: LoaderFunction = async ({ request }) => {
    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const take = getQueryIntParameter(request, "per_page", PER_PAGE_OWN_QUESTIONNAIRES); 
    const skip = getQueryIntParameter(request, "offset", 0);
    const search = getQueryStringParameter(request, "search");

    const filter: FilterData = {
        userId
    };

    if(search) {
        filter.questionnaire = {
            name: {
                contains: search
            }
        };
    }

    const totalQuery = await db.resolve.count({
        where: {
            ...filter
        }
    });

    const resolvedQuery = db.resolve.findMany({
        skip,
        take,
        where: {
            ...filter,
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            questionnaire: {
                include: {
                    category: true
                }
            }
        }
    });

    const [total, resolved] = await Promise.all([ totalQuery, resolvedQuery ]);
    const questionnaries = resolved.map(({ questionnaire, score }) => ({...questionnaire, score}));

    const hasPrev = skip > 0;
    const totalCurrent = skip + take;

    const hasNext = totalCurrent < total ? true : false;

    const baseUrl = process.env.BASE_URL;
    

    return { total, questionnaries, offset: skip, hasPrev, hasNext, baseUrl };
}

export default function QuestionnaireResolvePage() {

    const navigate = useNavigate();
    const { questionnaries, hasPrev, hasNext, offset, search, baseUrl } = useLoaderData<LoaderTypeData>();
    const [term, setTerm] = useState<string | null>(search);

    useEffect(() => {
        if(term === "") {
            navigate("/questionnaire/resolved");
        }
    }, [term]);

    const handleOnChageSearch = (event: ChangeEvent<HTMLInputElement>) => setTerm(event.target.value);

    const handleOnSearch = (event: FormEvent) => {
        event.preventDefault();
        navigate(`/questionnaire/resolved?search=${term}`);
    }

    const buildLinkPrev = () => {
        if(offset === 0 && !term) {
            return "/questionnaire/resolved";
        }

        const params = new URLSearchParams();
        const offserDiff = offset - PER_PAGE_OWN_QUESTIONNAIRES
        if(offserDiff > 0) {
            params.append("offset", offserDiff.toString());
        }

        if(term) {
            params.append("search", term);
        }

        return `/questionnaire/resolved?${params.toString()}`;
    }

    const buildLinkNext = () => {
        const params = new URLSearchParams();

        const nextOffset = offset + PER_PAGE_OWN_QUESTIONNAIRES;
        params.append("offset", nextOffset.toString());

        if(term) {
            params.append("search", term);
        }
        
        return `/questionnaire/resolved?${params.toString()}`;
    }

    return (
        <div className="container m-0 mx-auto">
            <div className="px-8">
                <div className="md:flex md:justify-between md:items-center">
                    <h1 className="mt-12 text-3xl mb-8 font-extrabold">My Resolved</h1>
                    <form onSubmit={handleOnSearch} className="mb-8 md:mb-0">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="search" name="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required onChange={handleOnChageSearch} />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-2">Search</button>
                        </div>
                    </form>
                </div>
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Category
                                </th>
                                <th>
                                    Score
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Resolved At
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { questionnaries.length > 0 
                                ? questionnaries.map(questionnarie => (
                                    <tr key={questionnarie.id} className="bg-white border-b">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                            {questionnarie.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {questionnarie.category.name}
                                        </td>
                                        <td>
                                            {}
                                        </td>
                                        <td className="py-4 px-6">
                                            {dayjs(questionnarie.createdAt).format("MMMM D, YYYY h:mm A")}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex">
                                                <Link to={`/questionnaire/view/${questionnarie.id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                                        View
                                                    </span>
                                                </Link>
    
                                                <a href={shareTwitterUrl("#TenTrueOrFalse I invite you to solve this quizz of only 10 questions 💿 \n", `${baseUrl}/questionnaire/resolved/${questionnarie.id}`)} target="_blank" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                                    Tweet
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                : <tr>
                                    <td colSpan={5}>
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
                
                <div className="mt-8 flex gap-4 justify-between">
                    <Link to={buildLinkPrev()} className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400 ${hasPrev ? "": "pointer-events-none opacity-40 grayscale"}`}>
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            Previous
                        </span>
                    </Link>

                    <Link to={buildLinkNext()} className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400 ${hasNext ? "" : "pointer-events-none opacity-40 grayscale"}`}>
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            Next
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}