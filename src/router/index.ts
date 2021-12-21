import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('@/pages/login/Login.vue'),
  // },
  {
    path: '/',
    name: 'Video',
    component: () => import('@/pages/video/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
