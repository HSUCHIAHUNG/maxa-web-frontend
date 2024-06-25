import { axiosInstance } from "../axiosInstance";

export const FETCH_AUTH = {
  SignUp: (data: object) => axiosInstance.post("", data),
  Login: (data: object) => axiosInstance.post("", data),
  MailCheck: (data: object) => axiosInstance.post("", data),
};
