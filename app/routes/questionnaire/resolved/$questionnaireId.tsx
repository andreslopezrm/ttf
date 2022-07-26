import { getAuth } from "@clerk/remix/ssr.server";
import { Question, Questionnaire } from "@prisma/client";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderTypeData = {
    questionnarie: Questionnaire & { questions: Question[] };
}

type ActionTypeData = {
    score: number;
}

export const loader: LoaderFunction = async ({ request, params }) => {
    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const { questionnaireId } = params;

    const existResolve = await db.resolve.findFirst({
        where: {
            userId,
            questionnaireId
        }
    });

    if(existResolve) {
        return redirect("/");
    }

    const questionnarie = await db.questionnaire.findFirst({
        where: {
            id: questionnaireId
        },
        include: {
            questions: {
                orderBy: {
                    name: "asc"
                }
            }
        }
    });

    if(!questionnarie) {
        return redirect("/404");
    }

    if(questionnarie.userId === userId) {
        return redirect(`/questionnaire/edit/${questionnarie.id}`);
    }

    return { questionnarie };
}


export const action: ActionFunction = async ({ request, params }) => {
    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const { questionnaireId } = params;
    const questionnarie = await db.questionnaire.findFirst({
        where: {
            id: questionnaireId
        },
        include: {
            questions: {
                orderBy: {
                    name: "asc"
                }
            }
        }
    });

    if(!questionnarie) {
        return redirect("/404");
    }

    const { questions } = questionnarie;
    const formData = await request.formData();

    const formAnswers = questions.map(question => {
        const { name } = question;
        const value = formData.get(`${name}-answer`) === "true";
        const isCorrect = question.answer === value;
        
        return { name, value, isCorrect };
    });

    const score = formAnswers.filter(({ isCorrect }) => isCorrect).length;

    const resolve = await db.resolve.create({
        data: {
            userId,
            questionnaireId: questionnarie.id,
            score
        }
    });

    const { id: resolveId } = resolve;
    const answers = formAnswers.map(answer => ({ resolveId, ...answer }));

    await db.answer.createMany({
        data: answers
    });

    return { score, resolveId };
}

export default function QuestionnarieResolvedPage() {
    const { questionnarie } = useLoaderData<LoaderTypeData>();
    const data = useActionData<ActionTypeData>();

    const { name, questions } = questionnarie;
    const { state } = useTransition();
    
    

    return (
        <section className="container m-0 mx-auto">
            <div className="px-8">
                <Form method="post" className="flex flex-col md:w-8/12 md:m-0 md:mx-auto">

                    <label className="block text-gray-900 text-3xl font-extrabold mb-4 mt-4" htmlFor="name">
                        {name}
                    </label>

                    {
                        questions.map(({ id, name, description }) => {
                            const identifierNumber = parseInt(name.split("-")[1], 10);
                            return (
                                (
                                    <div className="py-6 border-b border-b-slate-200 flex justify-between items-center" key={id}>
                                        <label className="block text-slate-600 text-lg font-normal mb-2" htmlFor={`${name}-description`}>
                                            {description}
                                        </label>
                                        
                                        <div className="mt-6 flex gap-4">
                                            <div>
                                                <input required id={`${name}-answer-true`} value="true" name={`${name}-answer`} type="radio" className="sr-only peer" />
                                                <label htmlFor={`${name}-answer-true`} className=" text-sm cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white">
                                                    True
                                                </label>
                                            </div>

                                            <div>
                                                <input required id={`${name}-answer-false`} value="false" name={`${name}-answer`} type="radio" className="sr-only peer" />
                                                <label htmlFor={`${name}-answer-false`} className="text-sm cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white">
                                                    False
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )
                            );
                        })
                    }
                    <div className="mt-8 mb-32 flex justify-end">
                        <button disabled={state === "submitting"} type="submit" className="w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 disabled:opacity-40 disabled:pointer-events-none">
                            <span className="w-40 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg">
                                Resolve {state === "submitting" ? " ..." : ""}
                            </span>
                        </button>
                    </div>
                </Form>
            </div>
        </section>
    );
}