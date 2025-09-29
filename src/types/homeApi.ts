// types/api.ts

export type TripType = "PASSENGER" | "DRIVER";

export interface Trip {
  id: number;
  type: TripType;
  from_location_text: string;
  to_location_text: string;
  seats: number;
  travel_datetime: string; // ISO date string
  price: string | null;
}

export interface Plans {
  monthly_price: string;
  annual_price: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
}

export interface Info {
  plans: Plans;
  social: SocialLinks;
}

export interface ApiData {
  trips: Trip[];
  info: Info;
  expired_token: boolean;
}

export interface ApiResponse {
  data: ApiData,
}
