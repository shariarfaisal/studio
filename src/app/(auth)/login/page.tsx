import { LoginForm } from "@/components/auth";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Xin chào mừng bạn | Igot studio",
  };
}

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
