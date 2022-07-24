import { getAuth } from "@clerk/remix/ssr.server";
import { Category, Question, Questionnaire } from "@prisma/client";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { db } from "~/utils/db.server";


type LoaderTypeData = {
    questionnaire: Questionnaire & { questions: Question[] };
    categories: Category[];
}

export const loader: LoaderFunction = async ({ request, params }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const { questionnaireId } = params;

    const questionnaire = await db.questionnaire.findFirst({
        where: { 
            id: questionnaireId
        },
        include: {
            questions: {
                orderBy: {
                    name: 'asc'
                }
            }
        }
    });

    if(questionnaire === null){
        return redirect("/404");
    }

    if(questionnaire?.userId !== userId) {
        return redirect("/404");
    }
    
    const categories = await db.category.findMany();
    return { questionnaire, categories };
};

export const action: ActionFunction = async ({ request, params }) => {
    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const { questionnaireId } = params;

    const questionnaire = await db.questionnaire.findFirst({
        where: { 
            id: questionnaireId
        },
        include: {
            questions: true
        }
    });

    if(questionnaire === null){
        return redirect("/404");
    }

    if(questionnaire?.userId !== userId) {
        return redirect("/404");
    }

    const formData = await request.formData();
    const name = formData.get("name")?.toString() ?? "";
    const categoryId = formData.get("categoryId")?.toString() ?? "";
    const {  questions } = questionnaire;

    await db.questionnaire.update({
        where: {
            id: questionnaireId
        },
        data: {
            name,
            categoryId,
            userId
        }
    });

    const questionsUpdateList = questions.map(question => {
        const { id, name } = question;
        const description = formData.get(`${name}-description`)?.toString() ?? "";
        const answer = formData.get(`${name}-answer`) === "true";

        

        return db.question.update({
            where: {
                id
            },
            data: {
                description,
                answer
            }
        });
    });

    await Promise.all(questionsUpdateList);

    return redirect("/questionnaire/owner");

}

export default function QuestionnaireEdit() {

    const { state } = useTransition();
    const { questionnaire, categories } = useLoaderData<LoaderTypeData>();

    const { name, questions, categoryId } = questionnaire;
    
    return (
        <div className="container m-0 mx-auto">
            <div className="px-8">

                <Form method="post" className="flex flex-col md:w-8/12 md:m-0 md:mx-auto">
                        
                        <label className="block text-gray-900 text-3xl font-extrabold mb-4 mt-4" htmlFor="name">
                            Questionnarie Name
                        </label>
                        <input defaultValue={name} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="name" />
            
                        <p className="mt-8">Enter 10 questions each with a true or false answer, can be a combination of true/false or all true or all false</p>

                        <div>
                            <label htmlFor="categoryId" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                            <select required defaultValue={categoryId} name="categoryId" id="categoryId" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="">- Select an option - </option>
                                { categories.map(({ id, name }) => (
                                    <option key={id} value={id}>{name}</option>
                                ))}
                            </select>
                        </div>

                        {
                            questions.map(({ id, name, answer, description }) => {
                                const identifierNumber = parseInt(name.split("-")[1], 10);
                                return (
                                    (
                                        <div className="mt-8" key={id}>
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${name}-description`}>
                                                Question {identifierNumber}
                                            </label>
                                            <input defaultValue={description} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${name}-description`} name={`${name}-description`} type="text" placeholder={`Question ${identifierNumber}`} />
                                            

                                            <div className="mt-6 flex gap-4">
                                                <div>
                                                    <input id={`${name}-answer-true`} defaultChecked={answer === true} value="true" name={`${name}-answer`} type="radio" className="sr-only peer" />
                                                    <label htmlFor={`${name}-answer-true`} className="cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white">
                                                        True
                                                    </label>
                                                </div>

                                                <div>
                                                    <input id={`${name}-answer-false`} defaultChecked={answer === false} value="false" name={`${name}-answer`} type="radio" className="sr-only peer" />
                                                    <label htmlFor={`${name}-answer-false`} className="cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white">
                                                        False
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                );
                            })
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
    );
}