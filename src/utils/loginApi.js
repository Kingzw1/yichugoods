import service from "./index";
// 登录接口
export const loginApi = (data) => {
  return service({
    method: "podt",
    url: "/user/register",
    data,
  });
};
// 注册接口
export const registerApi = (data) => {
  return service({
    method: "post",
    url: "/user/register",
    data,
  });
};
// 登录并注册
export const LoginAndRegisterApi = (data) => {
  return service({
    method: "post",
    url: "/user/registerAndLogin",
    data,
  });
};
