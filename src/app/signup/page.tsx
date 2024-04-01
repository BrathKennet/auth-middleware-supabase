import AuthForm from "@/components/auth-form-v1";
import AuthFormV2 from "@/components/auth-form-v2/auth";
import { TypeAuthForm } from "@/models/enum_models";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* Version 1 - With Route */}
      {/* ------------------- */}
      {/* <AuthForm
        action="/auth-route/signup"
        nameButton="Sign Up"
        alterLink="/login"
        labelLink="Login"
      /> */}

      {/* Version 2 - Client */}
      {/* ------------------- */}
      <AuthFormV2
        type={TypeAuthForm.SIGNUP}
        nameButton="Sign Up"
        alterLink="/login"
        labelLink="Login"
      />
    </main>
  );
}
