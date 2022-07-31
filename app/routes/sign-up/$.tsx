import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div>
      <SignUp routing={"path"} path={"/sign-up"} />
    </div>
  );
}