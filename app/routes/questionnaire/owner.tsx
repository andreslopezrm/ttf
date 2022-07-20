import { getAuth } from "@clerk/remix/ssr.server";
import { Category, Questionnaire } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { getQueryIntParameter } from "~/utils/params.server";

type LoaderTypeData = {
    questionnaries: any
}

export const loader: LoaderFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const take = getQueryIntParameter(request, "per_page", 2); 
    const skip = getQueryIntParameter(request, "offset", 0);

    const questionnaries = await db.questionnaire.findMany({
        skip,
        take,
        where: {
            userId
        },
        include: {
            category: true
        },
        orderBy: {
            createdAt: "desc"
        },
    });

    return { questionnaries };
}

export default function QuestionnarieOwnerPage() {

    const { questionnaries } = useLoaderData<LoaderTypeData>();

    console.log(questionnaries)

    return (
        <>
            <div className="container m-0 mx-auto">
                <div className="px-8">
                    <h2 className="text-3xl font-extrabold">My Questionnaries</h2>
                    <br />
                    
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
                                {/* { questionnaries.map(questionnarie: => (
                                    <tr key={questionnarie.id} className="bg-white border-b">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                            {questionnarie.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {questionnarie.category.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {questionnarie.createdAt}
                                        </td>
                                        <td className="py-4 px-6">
                                            -
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}