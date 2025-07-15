import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    alias: "/",
    path: "/home",
    name: "home",
    component: () => import("../views/indexView.vue"),
  },
  {
    path: "/axios",
    name: "axiosView",
    component: () => import("../views/axiosView.vue"),
  },
  {
    path: "/pinia",
    name: "piniaView",
    component: () => import("../views/piniaView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
