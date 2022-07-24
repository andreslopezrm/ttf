import dayjs from "dayjs";
import { getAuth } from "@clerk/remix/ssr.server";
import { Category, Questionnaire } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { getQueryIntParameter } from "~/utils/params.server";
import { PER_PAGE_OWN_QUESTIONNAIRES } from "~/utils/constants";

type LoaderTypeData = {
    total: number;
    offset: number;
    hasPrev: boolean, 
    hasNext: boolean;
    questionnaries: (Questionnaire & { category: Category })[];
}

export const loader: LoaderFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const take = getQueryIntParameter(request, "per_page", PER_PAGE_OWN_QUESTIONNAIRES); 
    const skip = getQueryIntParameter(request, "offset", 0);

    const totalQuery = await db.questionnaire.count({
        where: {
            userId
        }
    });
    
    const questionnariesQuery =  await db.questionnaire.findMany({
        skip,
        take,
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            category: true
        }
    });

    const [total, questionnaries] = await Promise.all([ totalQuery, questionnariesQuery ]);

    const hasPrev = skip > 0;
    const totalCurrent = skip + take;

    const hasNext = totalCurrent < total ? true : false;

    return { total, questionnaries, offset: skip, hasPrev, hasNext };
}

export default function QuestionnarieOwnerPage() {

    const { questionnaries, hasPrev, hasNext, offset } = useLoaderData<LoaderTypeData>();
    
    console.log({ hasPrev, hasNext, offset });
    return (
        <>
            <div className="container m-0 mx-auto">
                <div className="px-8">
                    <h2 className="text-3xl font-extrabold mb-8">My Questionnaries</h2>
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
                                    <th scope="col" className="py-3 px-6">
                                        Create At
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { questionnaries.map(questionnarie => (
                                    <tr key={questionnarie.id} className="bg-white border-b">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                            {questionnarie.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {questionnarie.category.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {dayjs(questionnarie.createdAt).format("MMMM D, YYYY h:mm A")}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex">
                                                <Link to={`/questionnaire/edit/${questionnarie.id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                                        Edit
                                                    </span>
                                                </Link>

                                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400  hover:from-pink-500 hover:to-orange-500 text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md bg-opacity-0">
                                                        Remove
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-8 flex gap-4 justify-between">
                        <Link to={offset - PER_PAGE_OWN_QUESTIONNAIRES > 0 ? `/questionnaire/owner?offset=${offset - PER_PAGE_OWN_QUESTIONNAIRES}` : "/questionnaire/owner"} className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400 ${hasPrev ? "": "pointer-events-none opacity-40 grayscale"}`}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Previous
                            </span>
                        </Link>

                        <Link to={`/questionnaire/owner?offset=${offset + PER_PAGE_OWN_QUESTIONNAIRES}`} className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400 ${hasNext ? "" : "pointer-events-none opacity-40 grayscale"}`}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Next
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}