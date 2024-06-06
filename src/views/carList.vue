<script setup>
import { ref, reactive, onMounted } from "vue";
import { useCarData } from "@/stores/carStore";
const carStare = useCarData();

onMounted(async () => {
  const token = JSON.parse(localStorage.getItem("UInfo"));
  const userId = token.body.id;
  await carStare.seeCar(userId);
});
const inputNum = ref(false);
const sendInputNum = () => {
  if (inputNum.value) {
    inputNum.value = false;
  } else {
    inputNum.value = true;
  }
};
const reference = ref();
// const selectAry = tableRef.value.getSelectionRows();

const sendSelect = () => {
  console.log("646", reference.value.getSelectionRows());
};
</script>

<template>
  <div>
    <el-table
      :data="carStare.carList"
      style="width: 100%; margin-top: 20px"
      @selection-change="sendSelect"
      ref="reference"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column property="goodsName" label="商品信息" width="400">
        <template #default="scope">
          <div style="display: flex; height: 100px">
            <img v-lazy="scope.row.images[0]" alt="" />
            <p>{{ scope.row.goodsName }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="price" label="单价" width="400">
        <template #default="scope">
          <p>￥{{ scope.row.price }}</p>
        </template>
      </el-table-column>
      <el-table-column property="num" label="数量" />
      <el-table-column label="操作">
        <template #header>
          <el-button
            color="rgb(235,235,235)"
            style="border-radius: 10px"
            @click="sendInputNum"
            >操作按钮</el-button
          >
        </template>
        <template #default="scope">
          <el-input-number
            v-if="inputNum"
            v-model="scope.row.num"
            min="1"
            size="small"
          />
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([carStare.carList[1]])">
        Toggle selection status of second and third rows
      </el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-table__body) {
  -webkit-border-vertical-spacing: 20px;
}
:deep(.el-table .el-table__body tr:hover) {
  background-color: transparent !important; /* 或者你想要的颜色 */
}
/* //表格头部圆角 */
:deep(.el-table__header-wrapper) {
  border-radius: 8px;
  z-index: 100 !important;
  overflow: hidden;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
}
/* //此代码是让每行左侧变圆 */
:deep(.el-table td:first-child) {
  border-left: 1px solid #e2ecfa;
  border-radius: 8px 0 0 8px;
  padding: 2px;
  /* z-index: 999; */
  background: #fff;
  background-color: #bbbbbb;
}
/* //此代码是让每行右侧变圆 */
:deep(.el-table td:last-child) {
  border-right: 1px solid #e2ecfa;
  border-radius: 0 8px 8px 0;
  /* z-index: 999; */
  padding: 2px;
  background: #fff;
  background-color: #bbbbbb;
}
/* // 修改表头样式-加边框 */
:deep(.el-table__header-wrapper) {
  border: solid 1px #04c2ed;
  box-sizing: border-box;
}
/* // 滚动条样式 */
:deep(.el-table__body-wrapper::-webkit-scrollbar-track) {
  background-color: #063570;
}
:deep(.el-table__body-wrapper::-webkit-scrollbar) {
  width: 10px;
  opacity: 0.5;
}
:deep(.el-table__body-wrapper::-webkit-scrollbar-thumb) {
  border-radius: 15px;
  background-color: #0257aa;
}
/* // 表格内背景颜色 */
:deep(.el-table th),
:deep(.el-table tr),
:deep(.el-table td) {
  background-color: #bbbbbb;
  border: 0px;
  color: #121e61;
  font-size: 14px;
  height: 35px;
  font-family: Source Han Sans CN Normal, Source Han Sans CN Normal-Normal;
  font-weight: Normal;
  /* margin: 0 20px; */
}
/* // 设置表格行高度 */
:deep(.el-table__body tr),
:deep(.el-table__body td) {
  padding: 0;
  height: 60px;
}
</style>