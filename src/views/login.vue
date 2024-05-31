<script setup>
import { ref, reactive, onMounted } from "vue";
import big1Img from "@/assets/images/bg1.jpg";
import logo from "@/assets/images/logo.png";
import { useLogin } from "@/stores/login";
import { useRouter } from "vue-router";
const router = useRouter();
const LoginStores = useLogin();
const ruleFormRef = ref(null);
const loginRules = {
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 5, max: 12, message: "用户名应该是5到12个字符", trigger: "blur" },
  ],
  userPassword: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 5, max: 12, message: "密码应该是5到12个字符", trigger: "blur" },
  ],
};
const registerRules = {
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 5, max: 12, message: "用户名应该是5到12个字符", trigger: "blur" },
  ],
  userPassword: [
    { required: true, message: "请输入验证码", trigger: "blur" },
    { min: 5, max: 12, message: "验证码应该是5到12个字符", trigger: "blur" },
  ],
};
const isLoginShow = ref(true);
const isRegisterShow = ref(false);
const butLogin = ref(null);
const butRegister = ref(null);

const setlogin = () => {
  isLoginShow.value = true;
  isRegisterShow.value = false;
  butRegister.value.style.color = "rgba(222, 222, 222, 0.8)";
  butLogin.value.style.color = "black";
};
const setRegister = () => {
  isRegisterShow.value = true;
  isLoginShow.value = false;
  butLogin.value.style.color = "rgba(222, 222, 222, 0.8)";
  butRegister.value.style.color = "black";
};
onMounted(() => {
  butLogin.value.style.color = "black";
  butRegister.value.style.color = "rgba(222, 222, 222, 0.8)";
});
// 登录
// const loginRef = ref();
const loginData = ref({
  userName: "",
  userPassword: "",
});
const login = async (formEl) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        await LoginStores.LoginAndRegister(loginData.value);
        ElMessage({
          message: LoginStores.AllData.message,
          type: "success",
        });
        router.push("/");
      } catch (error) {
        ElMessage.error("登录或注册失败");
        return Promise.reject(error);
      }
    } else {
      ElMessage.error("请输入用户名或密码");
    }
  });
};
// 注册
const registerRef = ref(null);
const registerData = ref({
  userName: "",
  userPassword: "",
});
const register = async () => {
  await registerRef.value.validate(async (valid) => {
    if (valid) {
      try {
        await LoginStores.LoginAndRegister(registerData.value);
        router.push("/");
      } catch (error) {
        ElMessage.error("登录或注册失败");
        return Promise.reject(error);
      }
    } else {
      ElMessage.error("验证失败", fields);
    }
  });
};
</script>

<template>
  <div class="main">
    <div class="logo">
      <div class="logo-main">
        <img v-lazy="logo" alt="" />
      </div>
      <div class="logo-big">
        <img v-lazy="big1Img" alt="" />
      </div>
    </div>
    <div class="login">
      <div class="login-heard">
        <spen ref="butLogin" @click="setlogin">密码登录</spen>
        <spen class="splice">|</spen>
        <spen ref="butRegister" @click="setRegister">验证码登录</spen>
      </div>
      <div class="login-form">
        <el-form
          v-show="isLoginShow"
          :model="loginData"
          :rules="loginRules"
          label-width="auto"
          size="large"
          ref="ruleFormRef"
        >
          <el-form-item prop="userName">
            <el-input v-model="loginData.userName" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input
              v-model="loginData.userPassword"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="width: 380px; margin: 0 auto"
              @click="login(ruleFormRef)"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <el-form
          v-show="isRegisterShow"
          :model="registerData"
          :rules="registerRules"
          label-width="auto"
          size="large"
          ref="registerRef"
        >
          <el-form-item prop="userName">
            <el-input
              v-model="registerData.userName"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input
              v-model="registerData.userPassword"
              placeholder="请输入验证码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="width: 380px; margin: 0 auto"
              @click="register"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 1000px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.logo {
  width: 500px;
  height: 500px;
}
.login {
  width: 450px;
  height: 400px;

  margin-top: 96px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.logo-main {
  width: 200px;
}
.logo-big > img {
  margin-top: 30px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
img {
  width: 100%;
}
.login-form {
  width: 400px;
  margin: 0 auto;
}
.login-heard {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 0 70px 0;
}
spen {
  font-size: 20px;
}
.splice {
  display: inline-block;
  margin: 0 50px;
}
</style>