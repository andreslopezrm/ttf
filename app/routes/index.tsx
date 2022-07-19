import { SignedIn, SignedOut } from "@clerk/remix";
import { HomeIn } from "~/components/home/home-in";
import { HomeOut } from "~/components/home/home-out";


export default function Index() {
  return (
    <>
      <SignedIn>
        <HomeIn />
      </SignedIn>
      
      <SignedOut>
        <HomeOut />
      </SignedOut>
    </>
  );
}
