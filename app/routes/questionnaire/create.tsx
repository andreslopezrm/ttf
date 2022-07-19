import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect, ActionFunction, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useTransition } from "@remix-run/react";


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
    const formData = await request.formData();
  
    // const username = formData.get("username");
    // const lastname = formData.get("lastname");
    return json({ success: true });
};

export default function QuestionnaireCreate() {
    const transition = useTransition();
    const { questionnarie } = useLoaderData();
    const data = useActionData();
    

    return (
        <>
            <Form method='post' className='flex flex-col'>
                <label>
                    <input defaultValue={questionnarie} type="text" name="name" id="name" placeholder="Name" />
                </label>

                <hr />
                <label>
                    <input defaultValue={questionnarie} type="text" name="question1" id="question1" placeholder="Question1" />
                </label>

               
                <br />
                <br />
                <button type='submit'>Accept</button>
            </Form>
            <p>{JSON.stringify(data)}</p>
            <p>{transition.state}</p>
        </>
    );
}