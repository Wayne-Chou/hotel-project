import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import { getToken } from '@/utils/localStorage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: '首頁'
      }
    },
    {
      path: "/rooms/:theme",
      name: "rooms",
      component: () => import("@/views/Rooms/index.vue"),
      meta: {
        title: '租屋'
      }
    },
    {
      path: "/roomDetail/:id",
      name: "roomDetail",
      component: () => import("@/views/RoomDetail/index.vue"),
      meta: {
        title: '租屋資訊'
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/index.vue"),
      meta: {
        title: '登入'
      }
    },
    {
      path: "/Reservation/:id",
      name: "ReservationPage",
      component: () => import("@/views/ReservationPage/index.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("@/views/account/index.vue"),
      meta: {
        title: '帳號資訊'
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/notFound/index.vue"),
    },
  ],
});

export default router;

const authPath = ['/account']

router.beforeEach((to, from, next) => {
  if (to?.meta?.title) {
    document.title = to.meta.title
  }
  if (authPath.includes(to.fullPath)) { // 要登入認證的頁面
    const token = getToken()
    if (!token) { // 確認是否有 token
      next('/login')
    } else {
      next()
    }
  } else { // 不用登入認證的頁面
    next()
  }
})