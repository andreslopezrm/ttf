import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div>
      <SignIn routing={"path"} path={"/sign-in"} />
    </div>
  );
}