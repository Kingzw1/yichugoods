<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import goodsCard from "@/components/goodsCard.vue";
import { useGoodsBrand } from "@/stores/goodsBrand";
import { useGoodsList } from "@/stores/goodsList";
import emitter from "@/utils/emitter.js";

const goodStore = useGoodsList();
const brandStore = useGoodsBrand();
const brandRef = ref(null);
onMounted(() => {
  try {
    goodStore.getGoodsList();
  } catch (error) {
    Promise.reject(error);
  }
});
const goodsBrand = (item) => {
  emitter.emit("send-brand", item);
  // if (brandList.value.length !== 0) {
  //   emitter.emit("send-arr", brandList.value);
  // } else {
  //   brandList.value = [];
  //   emitter.emit("send-arr", brandList.value);
  // }
};
const brandList = ref([]);
emitter.on("send-brand", (value) => {
  const index = brandList.value.indexOf(value); // 检查目标值是否存在于数组中
  if (index !== -1) {
    // 如果存在，则从数组中删除该值
    brandList.value.splice(index, 1);
  } else {
    // 如果不存在，则将值添加到数组末尾
    brandList.value.push(value);
  }
});
const delBrand = (index) => {
  brandList.value.splice(index, 1);
  if (brandList.value.length !== 0) {
    emitter.emit("send-arr", brandList.value);
  } else {
    brandList.value = [];
    emitter.emit("send-arr", brandList.value);
  }
};
// watch(
//   brandList,
//   (newvale, oldvale) => {
//     emitter.emit("send-arr", brandList.value);
//   },
//   { deep: true }
// );
</script>

<template>
  <div>
    <div>
      <div class="brand-1">
        <div class="brand">
          <span>品牌：</span>
          <ul>
            <li>全部</li>
            <li
              @click="goodsBrand(item)"
              class="bgcolor"
              ref="brandRef"
              v-for="(item, index) in brandStore.brandList"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="type">
          <span>类目：</span>
          <ul>
            <li>全部</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="typeList">
      <div class="brandList">
        <span>品牌：</span>
        <ul>
          <li
            class="brand-List"
            v-for="(item, index) in brandList"
            :key="index"
          >
            {{ item }}
            <span class="brand-x" @click="delBrand(index)">x</span>
          </li>
        </ul>
      </div>
      <div class="types">
        <span>类目：</span>
        <ul>
          <li>裤子</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <goodsCard></goodsCard>
    </div>
  </div>
</template>

<style scoped>
*::before,
*::after {
  box-sizing: border-box;
}
.brand-1 {
  min-height: 160px;

  margin-top: 25px;
  background-color: rgb(155, 255, 255);
}
.brand {
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 80px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
}
.brand > span {
  text-align: center;
  line-height: 80px;
  width: 80px;
  height: 80px;
  padding-left: 20px;
  padding-right: 50px;
}
.brand > ul > li {
  line-height: 80px;
  height: 80px;
  float: left;
  text-align: center;
  width: 80px;
}
.type {
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 80px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-top: 0px;
}
.type > span {
  width: 80px;
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
  padding-right: 50px;
  text-align: center;
}
.type > ul > li {
  text-align: center;
  width: 80px;
  height: 80px;
  line-height: 80px;
}
.typeList {
  display: flex;
  min-height: 250px;
  margin-top: 30px;
}
.brandList {
  width: 300px;
  border: 5px solid rgb(205, 205, 205);
}
.brandList > span {
  display: inline-block;
  width: 80px;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  padding: 10px 0 0 10px;
  text-align: center;
}
.brandList > ul {
  display: flex;
  flex-wrap: wrap;
}
.brandList > ul > li {
  min-width: 60px;
  max-height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 10px 10px;
  padding: 5px;
}

.types {
  width: 900px;
  border: 5px solid rgb(205, 205, 205);
  border-left: 0px;
}
.types > ul {
  display: flex;
  flex-wrap: wrap;
}
.types > ul > li {
  min-width: 60px;
  max-height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 0 10px;
}
.types > span {
  display: inline-block;
  width: 80px;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  padding: 10px 0 0 10px;
  text-align: center;
}
.card {
  display: flex;
  flex-flow: row wrap; /* 设置主轴为水平和允许换行 */
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px;
  background-color: rgb(229, 229, 229);
}
.cardBox {
  width: 200px;
  height: 300px;
}
.bgcolor:hover {
  background-color: rgb(205, 205, 205);
}
.brand-List {
  position: relative;
  background-color: antiquewhite;
}
.brand-x {
  display: inline-block;
  width: 13px;
  height: 15px;
  line-height: 15px;
  top: 0px;
  text-align: center;
  background-color: rgb(255, 0, 0);
  position: absolute;
}
</style>