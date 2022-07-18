import { SignedIn, SignedOut } from "@clerk/remix";
import { HomeIn } from "~/components/home/home-in";
import { HomeOut } from "~/components/home/home-out";
import { Navbar } from "~/components/navbar";


export default function Index() {
  return (
    <>
      <Navbar />
      <SignedIn>
        <HomeIn />
      </SignedIn>
      
      <SignedOut>
        <HomeOut />
      </SignedOut>
    </>
  );
}
