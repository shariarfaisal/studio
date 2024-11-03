import { ResetPasswordForm } from "@/components/auth/reset-password/form";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nhập mã xác thực | Igot studio",
  };
}

export default function ResetPasswordPage() {
  return (
    <>
      <ResetPasswordForm />
    </>
  );
}
