<template>
  <div class="body">
    <div class="center">
      <div class="heard"></div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
}
.heard {
  box-sizing: border-box;
  height: 200px;
  width: 1200px;
  margin: 0 auto;
  background-color: blue;
}
.main {
  width: 1200px;
  margin: 0 auto;
}
.center {
  box-sizing: border-box;
  width: 100%;
  border-bottom: 4px solid salmon;
}
</style>