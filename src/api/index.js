import axios from "axios";

const server = axios.create({
  baseURL: "/mock",
  timeout: 6000,
});

// 請求攔截器
server.interceptors.request.use(
  function (config) {
    // 在發送請求之前做些什麼
    // 可以在此處新增請求頭、修改請求參數等操作
    return config;
  },
  function (error) {
    // 對請求錯誤做些什麼
    return Promise.reject(error);
  }
);

// 回應攔截器
server.interceptors.response.use(
  function (response) {
    // 對回應資料做些什麼

    return response.data;
  },
  function (error) {
    // 對回應錯誤做些什麼
    return Promise.reject(error);
  }
);

export default server;
