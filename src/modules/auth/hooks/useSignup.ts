// useSignup.ts
import { apiClient } from "@/api/apiClient";
import { baseURL, endpoints } from "@/api/endpoints";
import { useMutation } from "@tanstack/react-query";

interface SignupPayload {
  email: string;
  phone_number: string;
  country_code: string;
  type: string;
}

export interface SignupResponse {
  data: {
    status: string;
    can_resend_after: number;
  };
}

export function useSignup() {
  return useMutation<SignupResponse, Error, SignupPayload>({
    mutationFn: (body) =>
      apiClient<SignupResponse>(`${baseURL}${endpoints.verificationCode}`, "POST", body),

    // onSuccess: (data) => {
    //   console.log("✅ Signup success:", data);
    // },

    // onError: (error) => {
    //   console.error("❌ Signup error:", error.message);
    // },
  });
}
