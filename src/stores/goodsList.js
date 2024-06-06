import { defineStore } from "pinia";
import { reactive, ref, watch, watchEffect } from "vue";
import { goodsListApi, goodsDetailApi } from "@/utils/goods";
export const useGoodsList = defineStore("GoodsList", () => {
  const goodsList = ref({});
  const getBrand = reactive({
    baseType: "",
    subType: "",
    brand: [],
  });
  watch(
    getBrand,
    (nValue, oValue) => {
      getGoodsList(nValue);
    },
    { deep: true }
  );
  const getGoodsList = async (data) => {
    try {
      const res = await goodsListApi(data);
      goodsList.value = res.data.body;
      console.log(goodsList.value);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const details = ref({}) || {};
  const getGoodsDetail = async (id) => {
    try {
      const res = await goodsDetailApi(id);
      details.value = res.data.body;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return { goodsList, getGoodsList, getBrand, getGoodsDetail, details };
});
