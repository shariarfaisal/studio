import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center items-center h-screen overflow-x-hidden">
      <div className="w-full max-w-[23rem] p-3">
        <Card className="w-full bg-white">
          <CardHeader className="flex items-center justify-center py-3">
            <Image
              src="/images/ai.jpg"
              alt=""
              className="w-[120px]"
              width={200}
              height={200}
            />
          </CardHeader>
          {children}
        </Card>
      </div>
    </div>
  );
}
