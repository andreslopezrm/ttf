import { getAuth } from "@clerk/remix/ssr.server";
import { SignOutButton, SignedOut, useClerk } from "@clerk/remix";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(process.env.CLERK_REDIRECT_LOGIN!!);
    }

    return { userId }
  };

  

export default function Privado() {
    const { userId } = useLoaderData();
    const { signOut } = useClerk();

    const exit = async () => {
        console.log('comenzando')
        await signOut();
        console.log('terminado');
    }

    return (
        <div>
            <h2>Ruta privada</h2>
            <p>{userId}</p>
            <br />
            <button onClick={exit} >
                salir
            </button>
        </div>
    );
}