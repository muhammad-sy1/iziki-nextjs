import { baseURL, endpoints } from "@/api/endpoints";
import { apiFetch } from "@/lib/apiFetch";
import { ApiResponse } from "@/types/homeApi";

export function getHomeData(): Promise<ApiResponse[]> {
  // console.log(apiFetch<ApiResponse[]>(`${baseURL}${endpoints.home}`));
  return apiFetch<ApiResponse[]>(`${baseURL}${endpoints.home}`);
}
