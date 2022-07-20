import { SignedIn, SignedOut, useClerk, } from "@clerk/remix";

import { Link } from "@remix-run/react";
import { useState } from "react";


export function Navbar() {

    const { signOut } = useClerk();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleOnExitSession = async () => {
        setIsDisabled(true);
        await signOut();
        setIsDisabled(false);
        window.location.href = '/';
    }


    return (
        <nav className="bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10">
            <div className="flex items-center gap-2 ml-4">
                <Link to="/">
                    <img src="/img/logo.png" alt="logo" className="w-12 h-12 rounded-full" />
                </Link>
                
                <Link to="/">
                    <span className="font-bold">#TenTrueOrFalse</span>
                </Link>
            </div>
            <SignedIn>
                <div className="mr-4 flex gap-6 text-sm items-center">
                    <Link to="me" className="text-slate-600">Perfil</Link>
                    <button disabled={isDisabled} onClick={handleOnExitSession} className="rounded px-4 py-2 border border-solid border-black bg-white text-black disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700">Sign out</button>
                </div>
            </SignedIn>
            <SignedOut>
                <div className="mr-4 flex gap-6 text-sm items-center">
                    <Link to="sign-in" className="text-slate-600">Sign In</Link>
                    <Link className="bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black" to="sign-up">Sign Up</Link>
                </div>
            </SignedOut>
            
        </nav>
    );
}