import axios from "axios";
import { GET_COOKIES } from "../utils/js-cookie";

// 創建axios實例並給定預設網址
const axiosInstance = axios.create({
  // baseURL: "/service/api",
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { headers, ...configSetting } = config;

    // 跟cookie取得Token
    const accessToken =
      (GET_COOKIES("MAXA") ?? GET_COOKIES("tmp_session")) ?? "false";

    // 如果有拿到Token就把Token存進header裡面
    if (accessToken !== "false") {
      headers.Authorization = accessToken;
    }

    return { ...configSetting, headers };
  },
  (error) => Promise.reject(new Error(error))
);

// 接收response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  // 如果使用者登入驗證沒有通過就會進到error函式
  (error) => {
    console.log(error);
  }
);

export { axiosInstance };
