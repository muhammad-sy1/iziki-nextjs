"use client";

import LoginForm from "@/modules/auth/component/login-form";
import { useTranslations } from "next-intl";

const Login = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col gap-y-5 w-full">
        <div className="text-4xl font-semibold text-my-green">
          Log in to <span className="text-black">IZIKIZ</span>
        </div>
        <div className="text-neutral-600 text-2xl">
          {t("contact.form.title")}
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
