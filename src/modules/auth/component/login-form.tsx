"use client";

import { Button } from "@/components/ui/button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { useLogin } from "@/modules/auth/hooks/useLogin";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Message must be at least 10 characters.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    }),
});

const LoginForm = () => {
    const t = useTranslations();
  const [show, setShow] = useState(false);
  const { mutate, isPending } = useLogin();
  const router = useRouter();
  const locale = useLocale();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (formData: any) => {
    const body = {
      ...formData,
      fcm_token: "random-token",
    };
    console.log(body);

    mutate(body, {
      onSuccess: () => {
        // console.log("✅ Status:", data.data.status);
        router.push(`/${locale}`);
        toast.success('success');
      },
      onError: (error) => {
        console.log("❌ Full error response:", error);
        toast.error(error.message);
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="xl:w-3/4 lg:w-4/5 w-full space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("contact.form.email")}
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder={t("contact.form.password")}
                  {...field}
                  type={show ? "text" : "password"}
                />
              </FormControl>
              <Button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute text-2xl h-10 end-0 bg-transparent text-my-black hover:bg-transparent"
              >
                {show ? <IoEyeOff /> : <IoEye />}
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="py-5 w-full" disabled={isPending} type="submit">
          Log in
          {isPending && <div className="loader"></div>}
        </Button>
        {/* {error && <p>{error}</p>} */}
        <div className="flex justify-between items-center">
          <Link
            className="hover:underline underline-offset-1"
            href={`/${locale}/signup`}
          >
            {t("contact.form.create")}
          </Link>
          {/* <Link
                  href={`/${locale}/signup`}
                  className="hover:underline underline-offset-1"
                >
                  {t("contact.form.forgetPassword")}
                </Link> */}
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
