import { create } from "zustand";
interface EmailState {
  signUpEmail: string;
  setSignUpEmail: (email: string) => void;
}
export const useEmailStore = create<EmailState>((set) => ({
  signUpEmail: "",
  setSignUpEmail: (email: string) => set({ signUpEmail: email }),
}));
