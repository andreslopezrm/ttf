import { UserProfile } from "@clerk/remix";
import { Navbar } from "~/components/navbar";

export default function MePage() {
  return (
    <div className="mt-20">
      <Navbar />
      <UserProfile />
    </div>
  );
}