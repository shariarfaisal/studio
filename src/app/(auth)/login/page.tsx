import { LoginForm } from "@/components/auth/login/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="w-full max-w-[23rem] p-3">
      <Card className="w-full bg-white">
        <CardHeader className="flex items-center justify-center">
          <Image
            src="/images/ai.jpg"
            alt=""
            className="w-[140px]"
            width={200}
            height={200}
          />
          <CardTitle className="text-2xl text-gradient-red-to-blue">
            Xin chào mừng bạn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
