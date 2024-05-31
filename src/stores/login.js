import { ref } from "vue";
import { defineStore } from "pinia";
import { loginApi, registerApi, LoginAndRegisterApi } from "@/utils/loginApi";
export const useLogin = defineStore("Login", () => {
  const loginData = ref({});
  const AllData = ref({});
  // 登录
  const PostLogin = async () => {
    try {
      const res = await loginApi(data);
      loginData.value = res.data;
    } catch (error) {
      return Promise.reject("登录失败", error);
    }
  };
  // 注册
  const PostRegister = async () => {
    try {
      await registerApi(data);
    } catch (error) {
      return Promise.reject("注册失败", error);
    }
  };
  // 登录并注册
  const LoginAndRegister = async (data) => {
    try {
      const res = await LoginAndRegisterApi(data);
      AllData.value = res.data;
      localStorage.setItem("UInfo", JSON.stringify(AllData.value));
    } catch (error) {
      ElMessage.error("登录或注册失败");
      return Promise.reject(error);
    }
  };
  return {
    loginData,
    PostLogin,
    PostRegister,
    LoginAndRegister,
    AllData,
  };
});
