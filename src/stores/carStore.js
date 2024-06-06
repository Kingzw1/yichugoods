import { defineStore } from "pinia";
import { addCarApi, seeCarApi, saveCarApi } from "@/utils/goods";
import { ref } from "vue";
// 购物车相关数据
export const useCarData = defineStore("carData", () => {
  const addCar = async (data) => {
    await addCarApi(data);
    await saveCarApi(data);
  };
  const carList = ref();
  const seeCar = async (id) => {
    try {
      const res = await seeCarApi(id);
      carList.value = res.data.body;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return { addCar, seeCar, carList };
});
