<script setup>
import { ref, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
import logo from "@/assets/images/logo.png";
import { goodsTypeApi } from "@/utils/goods";
import { useGoodsBrand } from "@/stores/goodsBrand";
import { useGoodsList } from "@/stores/goodsList";
import { useRouter } from "vue-router";

const router = useRouter();

const goodsStore = useGoodsList();
const BrandStore = useGoodsBrand();
const user = JSON.parse(localStorage.getItem("UInfo"));
const typeList = ref([]);
onMounted(async () => {
  try {
    const res = await goodsTypeApi();
    typeList.value = res.data.body;
    console.log(typeList.value);
  } catch (error) {
    return Promise.reject(error);
  }
});
// 获取品牌
const handleBrand = async (baseType, subType) => {
  // console.log(item, i);
  goodsStore.getBrand.baseType = baseType;
  goodsStore.getBrand.subType = subType;
  await BrandStore.getBrand({ baseType, subType });
  await router.push({
    path: "/",
    query: {
      baseType,
      subType,
    },
  });
};
const goHome = async () => {
  await router.push({
    path: "/",
    query: {},
    params: {},
  });
  router.go(0);
};
const goCarlist = () => {
  router.push({
    name: "carList",
  });
};
// 退出登录
const outLogin = () => {
  localStorage.removeItem("UInfo");
  router.push({ name: "login" });
};
</script>

<template>
  <div class="top1-heard">
    <div class="top1">
      <div style="width: 150px"><spen>衣橱世家 匠心制作</spen></div>
      <div style="width: 300px; display: flex; justify-content: space-between">
        <spen>我的订单</spen>
        <spen>
          <el-icon><User /></el-icon> {{ user.body.userName }}
          <el-button @click="outLogin">退出登录</el-button>
        </spen>
      </div>
    </div>
    <div class="search-heard">
      <div class="logo-img" @click="goHome" style="cursor: pointer">
        <img v-lazy="logo" alt="" />
      </div>
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
          cursor: pointer;
        "
        @click="goCarlist"
      >
        <el-dropdown>
          <el-icon><ShoppingCartFull /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="tyepList">
      <ul>
        <li class="type">
          <a href="#">分类</a
          ><span style="right: 10px; position: absolute">></span>
          <ul class="list2">
            <li class="list1" v-for="(item, index) in typeList" :key="index">
              <a href="#" @click.prevent="handleBrand(item.key, null)">{{
                item.key
              }}</a>
              <span style="right: 10px; position: absolute">></span>
              <ul class="list3">
                <li v-for="(i, iIndex) in item.value" :key="iIndex">
                  <a href="#" @click.prevent="handleBrand(item.key, i)">{{
                    i
                  }}</a>
                </li>
              </ul>
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
li {
  cursor: pointer;
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
  display: none;
  width: 180px;
  background-color: rgb(255, 240, 240);
  color: #000;
  position: relative;
  z-index: 999;
}
.type:hover .list2 {
  display: block;
}
.list2 > li {
  /* box-sizing: border-box; */
  width: 180px;
  text-align: left;
  padding-left: 10px;
  position: relative;
}
.list2 > li:hover {
  background-color: rgb(228, 228, 228);
}
.list3 {
  display: none;
  position: absolute;
  width: 180px;
  top: 0px;
  left: 180px;
  /* padding-left: 10px; */
  margin-left: 10px;
  background-color: rgb(255, 240, 240);
}
.list3 > li:hover {
  margin-left: 10px;

  background-color: rgb(228, 228, 228);
}
.list1:hover .list3 {
  display: block;
}
</style>