import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/roomDetail/:id",
      name: "roomDetail",
      component: () => import("@/views/RoomDetail/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/notFound/index.vue"),
    },
  ],
});

export default router;
