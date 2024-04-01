import AuthForm from "@/components/auth-form-v1";
import AuthFormV2 from "@/components/auth-form-v2/auth";
import { TypeAuthForm } from "@/models/enum_models";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* Version 1 - With Route */}
      {/* ------------------- */}
      {/* <AuthForm
        action="/auth-route/login"
        nameButton="Login"
        alterLink="/signup"
        labelLink="Signup"
      /> */}

      {/* Version 2 - Client */}
      {/* ------------------- */}
      <AuthFormV2
        type={TypeAuthForm.LOGIN}
        nameButton="Login"
        alterLink="/signup"
        labelLink="Signup"
      />
    </main>
  );
}
