import { defineStore } from "pinia";
import { ref } from "vue";
import { goodsListApi } from "@/utils/goods";
export const useGoodsList = defineStore("GoodsList", () => {
  const goodsList = ref({});
  const getGoodsList = async (data) => {
    try {
      const res = await goodsListApi(data);
      goodsList.value = res.data.body;
      console.log(goodsList.value);
    } catch (error) {
      Promise.reject(error);
    }
  };
  return { goodsList, getGoodsList };
});
