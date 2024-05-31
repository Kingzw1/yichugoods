<script setup>
import { ref, reactive } from "vue";
import { Search } from "@element-plus/icons-vue";
import logo from "@/assets/images/logo.png";
</script>

<template>
  <div class="top1-heard">
    <div class="top1">
      <div style="width: 150px"><spen>衣橱世家 匠心制作</spen></div>
      <div style="width: 300px; display: flex; justify-content: space-between">
        <spen>我的订单</spen>
        <spen>
          <el-icon><User /></el-icon>admin
        </spen>
      </div>
    </div>
    <div class="search-heard">
      <div class="logo-img"><img v-lazy="logo" alt="" /></div>
      <div>
        <el-input
          v-model="input1"
          style="width: 400px; height: 60px"
          size="large"
          placeholder="Please Input"
          :suffix-icon="Search"
        />
      </div>
      <div
        style="
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <el-icon><ShoppingCartFull /></el-icon>
      </div>
    </div>
    <div class="tyepList">
      <ul>
        <li class="type">
          <a href="#">分类</a
          ><span style="right: 10px; position: absolute">></span>
          <ul class="list2">
            <li>
              <a href="#">男装</a
              ><span style="right: 10px; position: absolute">></span>
            </li>
            <li>
              <a href="#">女装</a
              ><span style="right: 10px; position: absolute">></span>
            </li>
            <li>
              <a href="#">童装</a
              ><span style="right: 10px; position: absolute">></span>
            </li>
          </ul>
        </li>
        <li><a href="#">首页</a></li>
        <li><a href="#">我也询价</a></li>
        <li><a href="#">快速下单</a></li>
        <li><a href="#">采购指南</a></li>
        <li><a href="#">服务保障</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.top1-heard {
  width: 100%;
  height: 220px;
  position: relative;
}
.top1 {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  padding-top: 10px;
}
.logo-img {
  width: 200px;
}
img {
  width: 100%;
}
.search-heard {
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
ul,
ol {
  list-style: none; /* 去除列表项的默认项目符号 */
  padding: 0; /* 去除默认的内边距 */
  margin: 0; /* 去除默认的外边距 */
}
.tyepList > ul > li {
  display: inline-block;

  float: left;
  list-style-type: none;
}
.tyepList > ul > li:nth-child(n + 2) {
  width: 150px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.tyepList > ul {
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
}
.tyepList {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 160px;
}
.type {
  width: 180px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: rgb(205, 6, 11);
  color: white;
  border-top-left-radius: 10px; /* 左上角的弧度 */
  border-top-right-radius: 10px; /* 右上角的弧度 */
  position: relative;
}
a {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 继承父元素的颜色 */
}
.list2 {
  width: 180px;
  background-color: rgb(255, 240, 240);
  color: #000;
  position: relative;
}
.list2 > li {
  box-sizing: border-box;
  width: 180px;
  text-align: left;
  padding-left: 10px;
}
</style>