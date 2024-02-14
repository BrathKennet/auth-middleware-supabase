import AuthForm from "@/components/auth-form";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <AuthForm
        action="/auth-route/signup"
        nameButton="Sign Up"
        alterLink="/login"
        labelLink="Login"
      />
    </main>
  );
}
