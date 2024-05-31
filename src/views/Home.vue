<template>
  <div class="body">
    <div class="center">
      <div class="heard">
        <heard></heard>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import heard from "@/components/heard.vue";
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
}
.heard {
  box-sizing: border-box;
  height: 220px;
  width: 1200px;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
}
.main {
  width: 1200px;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
}
.center {
  box-sizing: border-box;
  width: 100%;
  border-bottom: 4px solid salmon;
}
</style>