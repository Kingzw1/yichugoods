<script setup>
import { useGoodsList } from "@/stores/goodsList";
import { useRouter } from "vue-router";
const router = useRouter();
const goodsStore = useGoodsList();
const sendDetail = (id) => {
  router.push({
    name: "detail",
    query: {
      id,
    },
  });
};
</script>

<template>
  <div
    class="cardList"
    v-for="(item, index) in goodsStore.goodsList"
    @click="sendDetail(item.id)"
    :key="index"
  >
    <img v-lazy="item.images[0]" alt="" />
    <p class="pOne">
      {{ item.goodsName }}
    </p>
    <p class="pTwo">￥{{ item.price }}</p>
  </div>
</template>

<style scoped>
.cardList {
  display: flex;
  flex-direction: column;
  flex: 0 0 200px;
  width: 200px;
  height: 300px;
  margin-top: 15px;
  padding: 10px;
  margin: 8px;
  background-color: white;
}
.cardList > img {
  width: 100%;
  height: 210px;
}
p {
  padding: 0;
  margin: 0;
}
.pOne {
  width: 200px;
  text-align: start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 显示两行文本 */
  height: 2.4em; /* 根据字体大小调整 */
  line-height: 1.2em;
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  padding-top: 10px;
}
.pTwo {
  padding-top: 10px;
  text-align: center;
}
</style>