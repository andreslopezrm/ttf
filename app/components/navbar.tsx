import { SignedIn, SignedOut } from "@clerk/remix";

import { Link } from "@remix-run/react";


export function Navbar() {
    return (
        <nav className="bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid">
            <div className="flex items-center gap-2 ml-4">
                <img src="/img/logo.png" alt="logo" className="w-12 h-12 rounded-full" />
                <span className="font-bold">#TenTrueOrFalse</span>
            </div>
            <SignedIn>
                <Link to="me">Me</Link>
            </SignedIn>
            <SignedOut>
                <div className="mr-4 flex gap-6 text-sm items-center">
                    <Link to="sign-in">Sign In</Link>
                    <Link className="bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black" to="sign-up">Sign Up</Link>
                </div>
            </SignedOut>
            
        </nav>
    );
}