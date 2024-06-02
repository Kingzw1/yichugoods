import { defineStore } from "pinia";
import { ref } from "vue";
import { goodsTypeApi, brondListApi } from "@/utils/goods";

export const useGoodsBrand = defineStore("brand", () => {
  const brandList = ref({});
  const getBrand = async (data) => {
    try {
      const res = await brondListApi(data);
      brandList.value = res.data.body;
      console.log(brandList.value);
    } catch (error) {
      Promise.reject(error);
    }
  };
  return { brandList, getBrand };
});
