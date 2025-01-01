import LeftPane from "@/components/auth/LeftPane";
import AuthForm from "@/components/auth/AuthForm";

export default function SignUp() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <LeftPane />
      <AuthForm type="sign-up" />
    </div>
  );
}
