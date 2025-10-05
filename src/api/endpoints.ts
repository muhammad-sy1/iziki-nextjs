const baseURL = "https://izikiz-back.bayanmasters.com/api/v1/";
const imgBaseURL = "https://ditake-back.bayanmasters.com/storage/";

const endpoints = {
  logIn: "app/auth/login",
  verificationCode: "app/auth/send/verification-code",
  register: "app/auth/register",
  checkCode: "app/auth/check/verification",
  resetPassword: "app/auth/reset-password",
  logout: "app/auth/logout",
  home: "app/home",
  //     getProfile: "app/auth/profile",
  //   updateUser: "app/auth/profile",
  //   contactUs: "app/contact-us",
};

export { imgBaseURL, baseURL, endpoints };
