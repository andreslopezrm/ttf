import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect, ActionFunction, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { db } from "~/utils/db.server";


export const loader: LoaderFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }
    
    const url = new URL(request.url);
    const questionnarie = url.searchParams.get("questionnarie");

    return { userId, questionnarie };
  };

export const action: ActionFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const formData = await request.formData();
  
    const name = formData.get("name")?.toString() ?? "";
    const questionsKeyList = [1,2,3];

    
    const categoryId = "21ffc43c-f3f1-4ed6-b1e5-24666584efe9";

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

    const questions = await db.question.createMany({ data: questionsData });

    return json({ name, id: questionnarie.id, questions: questions.count  });
};

export default function QuestionnaireCreate() {
    const transition = useTransition();
    const { questionnarie } = useLoaderData();
    const data = useActionData();

    console.log(data)
    

    return (
        <>

            <div className="container m-0 mx-auto">
                <div className="px-8">
                    <Form method='post' className='flex flex-col md:w-8/12'>
                    
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="name">
                            Questionnarie Name
                        </label>
                        <input defaultValue={questionnarie} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="name" />
            
                        <p className="mt-8">Enter 10 questions each with a true or false answer, can be a combination of true/false or all true or all false</p>

                        <div className="mt-8">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question-1-description">
                                Question 1
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="question-1-description" name="question-1-description" type="text" placeholder="Question 1" />
                            
                            <div className="mt-4 flex gap-6">
                                <div className="flex items-center">
                                    <input id="question-1-answer-true" value="true" name="question-1-answer" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                    <label htmlFor="question-1-answer-true" className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                        True
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input id="question-1-answer-false" defaultChecked value="false" name="question-1-answer" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                    <label htmlFor="question-1-answer-false" className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                        False
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question-2-description">
                                Question 2
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="question-2-description" name="question-2-description" type="text" placeholder="Question 2" />
                            
                            <div className="mt-4 flex gap-6">
                                <div className="flex items-center">
                                    <input id="question-2-answer-true" value="true" name="question-2-answer" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                    <label htmlFor="question-2-answer-true" className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                        True
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input id="question-2-answer-false" defaultChecked value="false" name="question-2-answer" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                    <label htmlFor="question-2-answer-false" className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                        False
                                    </label>
                                </div>
                            </div>
                        </div>

                        
                        <div className="mt-12">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question-3-description">
                                Question 3
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="question-3-description" name="question-3-description" type="text" placeholder="Question 3" />
                            
                            <div className="mt-4 flex gap-6">
                                <div className="flex items-center">
                                    <input id="question-3-answer-true" value="true" name="question-3-answer" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                    <label htmlFor="question-3-answer-true" className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                        True
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input id="question-3-answer-false" defaultChecked value="false" name="question-3-answer" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                    <label htmlFor="question-3-answer-false" className="cursor-pointer ml-3 block text-sm font-medium text-gray-700">
                                        False
                                    </label>
                                </div>
                            </div>
                        </div> 
                        

                        <div className="mt-8">
                            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">Save</button>
                        </div>

                    </Form>
                </div>
            </div>
            
        </>
    );
}