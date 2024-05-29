import axios from "axios";
const server = axios.create({
  baseURL: "http://127.0.0.1:612/",
  timeout: 3000,
});
// 请求拦截
server.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截
server.interceptors.response.use(
  function (response) {
    // 如果响应的状态码在 200 到 299 之间，表示请求成功
    if (response.status >= 200 && response.status < 300) {
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
        message: "请求失败：" + response.status,
        type: "error",
      });
    }
    // if (!response.data) {
    //   ElMessage({
    //     message: response.data.message || "服务器出错",
    //     type: "error",
    //   });
    // }
    // if (response.data) {
    //   ElMessage({
    //     message: response.data.message,
    //     type: "success",
    //   });
    // }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { server };
