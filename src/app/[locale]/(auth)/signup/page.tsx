"use client";

import SignUpForm from "@/modules/auth/component/signup-form";

export default function Signup() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-y-5 w-full">
          <div className="text-4xl font-semibold text-my-green">
            Create <span className="text-black">Account</span>
          </div>
          <div className="text-neutral-600 text-2xl">Enter Your Details</div>
          <div className="w-full">
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}
