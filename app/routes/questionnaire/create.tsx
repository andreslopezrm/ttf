import { getAuth } from "@clerk/remix/ssr.server";
import { Category } from "@prisma/client";
import { LoaderFunction, redirect, ActionFunction } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { db } from "~/utils/db.server";

const questionsKeyList = ["01", "02","03","04","05", "06", "07", "08", "09","10"];

type LoaderTypeData = {
    questionnarie: string;
    categories: Category[]
}

export const loader: LoaderFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }
    
    const url = new URL(request.url);
    const questionnarie = url.searchParams.get("questionnarie");
    const categories = await db.category.findMany();

    return { userId, questionnarie, categories };
  };

export const action: ActionFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const formData = await request.formData();
    const name = formData.get("name")?.toString() ?? "";
    const categoryId = formData.get("categoryId")?.toString() ?? "";

    const questionnarie = await db.questionnaire.create({
        data: {
            name, categoryId, userId 
        }
    });


    const questionsData = questionsKeyList.map(questionKey => {

        const description = formData.get(`question-${questionKey}-description`)?.toString() ?? "";
        const answer = formData.get(`question-${questionKey}-answer`) === "true";
        const name = `question-${questionKey}`;

        return {
            name,
            description,
            answer,
            questionnaireId: questionnarie.id
        }
    });

    await db.question.createMany({ data: questionsData });

    return redirect("/questionnaire/owner");
};

export default function QuestionnairePageCreate() {
    const { state } = useTransition();
    const { questionnarie, categories } = useLoaderData<LoaderTypeData>();

    return (
        <>

            <div className="container m-0 mx-auto">
                <div className="px-8">
                    <Form method="post" className="flex flex-col md:w-8/12 md:m-0 md:mx-auto">
                    
                        <label className="block text-gray-900 text-3xl font-extrabold mb-4" htmlFor="name">
                            Questionnarie Name
                        </label>
                        <input defaultValue={questionnarie} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="name" />
            
                        <p className="mt-8 mb-4">Enter 10 questions each with a true or false answer, can be a combination of true/false or all true or all false</p>

                        <div>
                            <label htmlFor="categoryId" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                            <select required name="categoryId" id="categoryId" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="">- Select an option - </option>
                                { categories.map(({ id, name }) => (
                                    <option key={id} value={id}>{name}</option>
                                ))}
                            </select>
                        </div>

                        {
                            questionsKeyList.map(questionKey => (
                                <div className="mt-8 mb-2" key={questionKey}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`question-${questionKey}-description`}>
                                        Question {parseInt(questionKey, 10)}
                                    </label>
                                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`question-${questionKey}-description`} name={`question-${questionKey}-description`} type="text" placeholder={`Question ${parseInt(questionKey, 10)}`} />
                                    
                                    <div className="mt-6 flex gap-4">
                                        <div>
                                            <input id={`question-${questionKey}-answer-true`} value="true" name={`question-${questionKey}-answer`} type="radio" className="sr-only peer" />
                                            <label htmlFor={`question-${questionKey}-answer-true`} className="cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white">
                                                True
                                            </label>
                                        </div>

                                        <div>
                                            <input defaultChecked id={`question-${questionKey}-answer-false`} value="false" name={`question-${questionKey}-answer`} type="radio" className="sr-only peer" />
                                            <label htmlFor={`question-${questionKey}-answer-false`} className="cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="mt-16 mb-32 flex justify-end">
                            <button disabled={state === "submitting"} className="w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 disabled:opacity-40 disabled:pointer-events-none">
                                <span className="w-40 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg">
                                    Save {state === "submitting" ? " ..." : ""}
                                </span>
                            </button>
                        </div>

                    </Form>
                </div>
            </div>
            
        </>
    );
}