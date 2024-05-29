<script setup>
import { ref, reactive } from "vue";
import big1Img from "@/assets/images/bg1.jpg";
import logo from "@/assets/images/logo.png";
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
        <spen>密码登录</spen>
        <spen class="splice">|</spen>
        <spen>验证码登录</spen>
      </div>
      <div class="login-form">
        <el-form
          :model="form"
          :rules="rules"
          style="max-width: 400px"
          label-width="auto"
          size="large"
        >
          <el-form-item prop="name">
            <el-input v-model="ruleForm" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item label-width="400px" style="padding: 0">
            <template #label>
              <el-button type="primary" style="width: 380px; margin: 0 auto"
                >登录</el-button
              >
            </template>
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