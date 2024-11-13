import { ResetPasswordForm } from "@/components/auth";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nhập mã xác thực | Docs Studio",
  };
}

export default function ResetPasswordPage() {
  return (
    <>
      <ResetPasswordForm />
    </>
  );
}
