"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CardDescription } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export const FindEmailForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <CardDescription className="w-full text-center">
          Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn mã xác thực để
          đặt lại mật khẩu
        </CardDescription>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-0">
              <FormControl>
                <Input
                  className="rounded-xl h-10"
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="submit"
          className="w-full h-10 rounded-xl"
          type="submit"
        >
          Tiếp tục
        </Button>
        <Link
          href="/login"
          className="w-full rounded-xl text-blue-900 flex items-center justify-center"
        >
          Quay lại đăng nhập
        </Link>
      </form>
    </Form>
  );
};
