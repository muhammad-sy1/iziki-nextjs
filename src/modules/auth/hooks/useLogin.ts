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

interface UserResponse {
  data: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      phone_number: string;
      country_code: string;
      email: string;
      birth_date: string; // ISO date string
      image: string | null;
      document_verified: number; // 0 or 1
      un_read_notifications_count: number;
      can_publish_trips: boolean;
      can_join_trips: boolean;
      created_at: string; // ISO date-time string
    };
    token: string;
  };
}

export function useLogin() {
  return useMutation<UserResponse, Error, RegisterPayload>({
    mutationFn: (body) =>
      apiClient<UserResponse>(`${baseURL}${endpoints.logIn}`, "POST", body),

    onSuccess: (data) => {
      console.log("✅ login success:", data, data.data.token);

      if (data.data.token) {
        setCookie("token", data.data.token, 7);
      }
    },

    onError: (error) => {
      console.error("❌ login error:", error.message);
    },
  });
}
