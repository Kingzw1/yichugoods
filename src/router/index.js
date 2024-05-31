import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/",

      children: [
        {
          path: "/",
          name: "goods",
          component: () => import("../views/goods.vue"),
        },
        {
          path: "/yifu",
          name: "yifu",
          component: () => import("../views/yifu.vue"),
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
  const token = JSON.parse(localStorage.getItem("UInfo") || null);

  // 需要身份验证的路由
  if (!token?.body?.id) {
    if (to.name !== "login") {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    if (to.name === "login") {
      next({ name: "home" });
    } else {
      next();
    }
  }
});
export default router;
