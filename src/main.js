import "normalize.css";
import "@/assets/tolerant.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 使用 import 语法引入图片
import errorImage from "./assets/images/error.jpg";
import loadingImage from "./assets/images/logo.png";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImage, // 替换为加载失败时显示的图片路径
  loading: loadingImage, // 替换为加载时显示的图片路径
  attempt: 1,
});
app.use(createPinia());
app.use(router);
app.mount("#app");
