import LeftPane from "@/components/LeftPane";
import AuthForm from "@/components/AuthForm";

export default function SignUp() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <LeftPane />
      <AuthForm type="sign-up" />
    </div>
  );
}
