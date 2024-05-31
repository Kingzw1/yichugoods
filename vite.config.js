import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        // 将所有以/api开头的请求代理到目标地址
        target: "http://127.0.0.1:612", // 后端API的地址
        changeOrigin: true, // 更改源地址，以便能够发送跨域请求
        rewrite: (path) => path.replace(/^\/api/, ""), // 移除请求路径中的/api前缀
      },
    },
  },
});
