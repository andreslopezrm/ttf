import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { getAuth } from "@clerk/remix/ssr.server";
import { Answer, Question, Questionnaire, Resolve } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { getQueryStringParameter } from "~/utils/params.server";
import { Modal } from "~/components/shared/modal";
import { getClientHeight, getClientWidth } from "~/utils/browser";

type LoaderTypeData = {
    showModal: boolean;
    baseUrl: string;
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

    const showModal = getQueryStringParameter(request, "show_modal") !== null;
    const baseUrl = process.env.BASE_URL;

    return { resolved, showModal, baseUrl }
}

export default function QuestionnaireViewPage() {

    const { resolved, showModal, baseUrl } = useLoaderData<LoaderTypeData>();
    const { questionnaire, answers, score } = resolved;
    const {  questions } = questionnaire;
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setModal(showModal);
    }, []);

    const obtainQuestionByName = (name: string) => questions.find(question => question.name === name)?.description;

    const handleOnClose = () => setModal(false);
    
    return (
        <>
            <div className="container m-0 mx-auto">
                <div className="px-8">
                    <h3 className="block text-gray-900 text-3xl font-extrabold mb-4 mt-4">
                        {questionnaire.name}
                    </h3>
                    <p className="mt-4 text-slate-700 text-lg mb-4 font-extrabold">Score: {score} / 10</p>
                    
                    <div className="overflow-x-auto relative mb-16">
                        <table className="w-full text-sm text-left text-gray-500">
                            <tbody>
                                {
                                    answers.map(({ id, name, value, isCorrect }) => (
                                        <tr className="bg-white border-b" key={id}>
                                            <td className="py-4 px-6">
                                                {obtainQuestionByName(name)}
                                            </td>
                                            <td className="py-4 px-6">
                                                { value ? "True" : "False"}
                                            </td>
                                            <td className="py-4 px-6">
                                                {
                                                    isCorrect 
                                                    ? <div className="flex items-center ml-3 gap-1">
                                                        <span className="text-green-800">Correct</span>
                                                    </div>
                                                    : <div className="flex items-center ml-3 gap-1">
                                                        <span className="text-red-800">Incorrect</span>
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            { modal
                ?   <Modal onClose={handleOnClose} shareUrl={`${baseUrl}/questionnaire/resolved/${resolved?.questionnaireId}`}>
                        <div className="font- text-lg font-extralight">
                            <p>
                                You have achieved a score for this quiz of 
                                <strong> { resolved?.score } / 10</strong>
                            </p>
                        </div>
                    </Modal> 
                : null 
            }
            {
                modal && resolved?.score === 10
                    ? <div className="fixed z-20 top-0 left-0 right-0 h-1/5">
                            <Confetti
                                width={getClientWidth()}
                                height={getClientHeight() * 0.4}
                            />
                        </div>
                    : null
            }
        </>
    );
}