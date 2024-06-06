<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import error from "@/assets/images/error.jpg";
import { useGoodsList } from "@/stores/goodsList";
import { useCarData } from "@/stores/carStore";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const detailMes = useGoodsList();
const carStore = useCarData();
onMounted(async () => {
  try {
    await detailMes.getGoodsDetail(route.query.id);
    detailData.goodsInfo[0].color = detail.value.colors[0];
    detailData.goodsInfo[0].size = detail.value.sizes[0];
  } catch (error) {
    return Promise.reject(error);
  }
});
const detail = computed(() => {
  return detailMes.details;
});
const detailImgs = computed(() => {
  return detailMes?.details?.images;
});

const token = JSON.parse(localStorage.getItem("UInfo"));
const detailData = reactive({
  userId: Number(token.body.id),
  goodsInfo: [{ goodsId: Number(route.query.id), num: 1, color: "", size: "" }],
});
const AddCarData = async () => {
  const cars = JSON.stringify(detailData);
  try {
    await carStore.addCar(cars);
  } catch (error) {
    return Promise.reject(error);
  }
  router.push({ name: "carList" });
};
</script>

<template>
  <div class="detail-max">
    <div class="detail-img">
      <div class="img-max" v-if="detailImgs && detailImgs.length > 0">
        <img v-lazy="detailImgs[0]" alt="" />
      </div>
      <div class="img-min">
        <ul>
          <li v-for="(item, index) in detailImgs" :key="index">
            <img v-lazy="item" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-list">
      <p>{{ detail.goodsName }}</p>
      <div class="detail-main">
        <p>
          单价<i style="color: red">￥{{ detail.price }}</i>
        </p>
        <span style="margin-top: 20px">颜色</span
        ><el-select
          v-model="detailData.goodsInfo[0].color"
          placeholder="Select"
          size="large"
          style="width: 240px; margin-top: 20px"
        >
          <el-option
            v-for="item in detail.colors"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <br />
        <span style="margin-top: 20px">尺寸</span
        ><el-select
          v-model="detailData.goodsInfo[0].size"
          placeholder="Select"
          size="large"
          style="width: 240px; margin-top: 20px"
        >
          <el-option
            v-for="item in detail.sizes"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <p>产地：{{ detail.origin }}</p>
        <p>材质：{{ detail.material }}</p>
        <p>配送：</p>
        <p>邮费：{{ detail.postage }}</p>
        <p>正品保证：</p>
      </div>
      <el-input-number
        v-model="detailData.goodsInfo[0].num"
        min="1"
        class="mx-4"
        style="margin-left: 20px; margin-top: 20px"
      />
      <br />
      <el-button
        color="rgb(255, 0, 0)"
        :dark="isDark"
        style="margin-left: 20px; margin-top: 20px"
        >立即购买</el-button
      >
      <el-button
        color="red"
        :dark="isDark"
        style="margin-left: 20px; margin-top: 20px"
        @click="AddCarData"
        >加入购物车</el-button
      >
    </div>
  </div>
  <div
    style="margin-top: 20px; text-align: center"
    v-html="detail.richtext"
  ></div>
</template>

<style scoped>
*::before,
*::after {
  box-sizing: border-box;
}
.detail-max {
  display: flex;
  height: 600px;
  margin-top: 20px;
  /* background-color: antiquewhite; */
}
.detail-img {
  width: 400px;
  /* background-color: rgb(196, 196, 196); */
}
.img-max {
  width: 400px;
  height: 500px;
  /* background-color: rgb(255, 225, 225); */
}
.img-max > img {
  width: 100%;
  height: 100%;
}
.img-min {
  width: 400px;
  height: 100px;
  margin-top: 10px;
}
.img-min > ul {
  width: 400px;
  height: 100px;
  display: flex;
  /* justify-content: space-around; */
  overflow-x: auto;
  white-space: nowrap; /* 强制内容不换行 */
}
.img-min > ul > li {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  margin: 0 10px;
  /* background-color: rgb(255, 134, 134); */
}
.img-min > ul > li > img {
  width: 80px;
  height: 80px;
}
.detail-list {
  width: 780px;
  margin-left: 20px;
  background-color: rgb(255, 92, 92);
}
.detail-list > p {
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
}
.detail-main > * {
  margin-left: 20px;
}
.detail-main {
  height: 400px;
  background-color: rgb(239, 239, 239);
}
.detail-main > p:nth-child(1) {
  height: 30px;
  padding-top: 20px;
  font-size: 30px;
}
</style>