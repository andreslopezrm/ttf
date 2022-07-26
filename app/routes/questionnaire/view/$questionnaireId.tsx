import { getAuth } from "@clerk/remix/ssr.server";
import { Answer, Question, Questionnaire, Resolve } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderTypeData = {
    resolved: Resolve & {
        answers: Answer[];
        questionnaire: Questionnaire & {
            questions: Question[];
        }
    }
}

export const loader: LoaderFunction = async ({ request, params }) => {
    
    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    const { questionnaireId } = params;

    const resolved = await db.resolve.findFirst({
        where: {
            userId,
            questionnaireId
        },
        include: {
            answers: {
                orderBy: {
                    name: "asc"
                }
            },
            questionnaire: {
                include: {
                    questions: true
                }
            }
        }
    });

    if(!resolved) {
        return redirect("/404");
    }

    return { resolved }
}

export default function QuestionnaireViewPage() {

    const { resolved } = useLoaderData<LoaderTypeData>();
    const { questionnaire, answers, score } = resolved;
    const {  questions } = questionnaire;

    const obtainQuestionByName = (name: string) => questions.find(question => question.name === name)?.description;
    
    return (
        <div className="container m-0 mx-auto">
            <div className="px-8">
                <h3 className="block text-gray-900 text-3xl font-extrabold mb-4 mt-4">
                    {questionnaire.name}
                </h3>
                <p className="mt-4 text-slate-600 text-sm mb-8">Score: {score} / 10</p>
                <div className="mb-16">
                    {
                        answers.map(({ name, value, isCorrect }) => {
                            return (
                                <div className="md:flex md:justify-between mb-4">
                                    <div className="mb-2">{obtainQuestionByName(name)}</div>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-slate-600 font-extralight">{ value ? "True" : "False"}</span>
                                        {
                                            isCorrect 
                                            ? <img src="/img/correct.png" alt="correct" className="w-9" /> 
                                            : <img src="/img/incorrect.png" alt="incorrect" className="w-9" />
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}