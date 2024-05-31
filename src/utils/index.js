import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
const service = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    shop: "e+",
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});

// 请求拦截
service.interceptors.request.use(
  function (config) {
    const UInfo = JSON.parse(localStorage.getItem("UInfo") || null);
    if (UInfo?.body?.id) {
      config.headers = {
        ...config.headers,
        token: UInfo.body.id,
      };
    }

    nProgress.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截
service.interceptors.response.use(
  function (response) {
    nProgress.done();

    // 如果响应的状态码在 200 到 299 之间，表示请求成功
    if (response.data.code === 200) {
      // 如果服务器返回了成功信息，显示成功消息
      if (response.data && response.data.message) {
        ElMessage({
          message: response.data.message,
          type: "success",
        });
      }
    } else {
      // 如果请求不成功，显示默认错误消息
      ElMessage({
        message: response.data.message || "服务器错误",
        type: "error",
      });
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default service;
