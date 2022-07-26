import { getAuth } from "@clerk/remix/ssr.server";
import { Answer, Resolve } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderTypeData = {
    resolved: Resolve & { answers: Answer[] }
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
    const {  } = resolved;
    
    return (
        <div className="container m-0 mx-auto">
            <div className="px-8">
                <h3 className="block text-gray-900 text-3xl font-extrabold mb-4 mt-4" htmlFor="name">
                    {}
                </h3>
            </div>
        </div>
    );
}