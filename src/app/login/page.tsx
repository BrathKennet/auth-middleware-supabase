import AuthForm from "@/components/auth-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <AuthForm
        action="/auth-route/login"
        nameButton="Login"
        alterLink="/signup"
        labelLink="Signup"
      />
    </main>
  );
}
