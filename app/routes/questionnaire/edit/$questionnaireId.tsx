import { getAuth } from "@clerk/remix/ssr.server";
import { Category, Question, Questionnaire } from "@prisma/client";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { db } from "~/utils/db.server";


type LoaderTypeData = {
    questionnaire: (Questionnaire & { questions: Question[] });
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
                                            
                                            <div className="mt-4 flex gap-6">
                                                <div className="flex items-center">
                                                    <input id={`${name}-answer-true`} defaultChecked={answer === true} value="true" name={`${name}-answer`} type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                    <label htmlFor={`${name}-answer-true`} className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                                        True
                                                    </label>
                                                </div>
        
                                                <div className="flex items-center">
                                                    <input id={`${name}-answer-false`} defaultChecked={answer === false} value="false" name={`${name}-answer`} type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                    <label htmlFor={`${name}-answer-false`} className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                                        False
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                );
                            })
                        }
                        <div className="mt-8">
                            <button disabled={state === "submitting"} type="submit" className="cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-20">Save</button>
                        </div>

                    </Form>

            </div>
        </div>
    );
}