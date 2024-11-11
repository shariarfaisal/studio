"use client";

import { CardContent, CardTitle } from "@/components/ui/card";
import { VerifyOtpForm } from "./VerifyOtp";
import { FindEmailForm } from "./FindEmailForm";
import { useState } from "react";
import { UpdatePasswordForm } from "./UpdatePassword";
import { toast } from "@/hooks/use-toast";

export const ResetPasswordForm = () => {
  const [step, setStep] = useState(1);

  const onFindEmailSuccess = () => {
    setStep(2);
  };

  const onVerifyOtpSuccess = () => {
    setStep(3);
  };

  const onUpdatePasswordSuccess = () => {
    toast({
      title: "Cập nhật mật khẩu thành công",
      type: "foreground",
    });
  };

  return (
    <>
      <CardContent className="w-full space-y-3">
        {[1, 2].includes(step) && (
          <>
            <CardTitle className="w-full text-2xl text-blue-900 text-center">
              Nhập email của bạn
            </CardTitle>

            {step === 1 && <FindEmailForm onSuccess={onFindEmailSuccess} />}
            {step === 2 && <VerifyOtpForm onSuccess={onVerifyOtpSuccess} />}
          </>
        )}
        {step === 3 && (
          <>
            <UpdatePasswordForm onSuccess={onUpdatePasswordSuccess} />
          </>
        )}
      </CardContent>
    </>
  );
};
