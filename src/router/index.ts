import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/TasksView.vue"),
    },
  ],
});

export default router;
