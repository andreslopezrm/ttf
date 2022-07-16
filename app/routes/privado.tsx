import { getAuth } from "@clerk/remix/ssr.server";
import { SignOutButton, SignedOut, useClerk, RedirectToSignIn } from "@clerk/remix";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";


export const loader: LoaderFunction = async ({ request }) => {

    const { userId } = await getAuth(request);
    if(!userId){
        return redirect(`${process.env.CLERK_REDIRECT_LOGIN!!}?redirect_url=${request.url}`);
    }

    return { userId }
  };

  

export default function Privado() {
    const { userId } = useLoaderData();
    const { signOut } = useClerk();
    const navigate = useNavigate();

    const exit = async () => {
        console.log('comenzando')
        await signOut();
        console.log('terminado');
        navigate('/', { replace: true })
    }

    return (
        <div>
            <h2>Ruta privada (2)</h2>
            <p>{userId}</p>

            <br />
            <button onClick={exit} >
                salir
            </button>
        </div>
    );
}