import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center">
      <SignIn afterSignInUrl={"/todos"} signUpUrl={"/register"}/>
    </div>
  );
}
