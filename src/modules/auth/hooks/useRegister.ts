// useSignup.ts
import { apiClient } from "@/api/apiClient";
import { baseURL, endpoints } from "@/api/endpoints";
import { setCookie } from "@/lib/cookies/cookiesMethods";
import { useMutation } from "@tanstack/react-query";

interface RegisterPayload {
  email: string;
  phone_number: string;
  country_code: string;
  type: string;
}

interface RegisterResponse {
  data: {
    data: {
      user: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        country_code: string;
        gender: string;
        birth_date: string;
        can_publish_trips: boolean;
        can_join_trips: boolean;
        created_at: string;
        updated_at: string;
      };
      token: string;
    };
  };
}

export function useRegister() {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: (body) =>
      apiClient<RegisterResponse>(
        `${baseURL}${endpoints.register}`,
        "POST",
        body
      ),

    onSuccess: (data) => {
      console.log("✅ Register success:", data, data.data.data.token);

      if (data.data.data.token) {
        setCookie("token", data.data.data.token, 7);
      }
    },

    onError: (error) => {
      console.error("❌ Register error:", error.message);
    },
  });
}
