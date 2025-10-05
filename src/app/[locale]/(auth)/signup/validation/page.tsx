"use client";

import ValidationForm from "@/modules/auth/component/validation-form";
import { useEmailStore } from "@/modules/auth/stores/useEmailStore";

const ValidationCode = () => {
  const { signUpEmail } = useEmailStore();

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="text-4xl font-semibold text-my-green">Verify Account</div>
      <div className="text-neutral-600 text-2xl">For user: {signUpEmail} </div>
      <div className="w-full">
        <ValidationForm />
      </div>
    </div>
  );
};

export default ValidationCode;
