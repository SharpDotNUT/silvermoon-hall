import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home/index.vue')
    },
    {
      path: '/emotion',
      name: 'emotion',
      component: () => import('../pages/emotion/index.vue')
    }
  ]
})

export default router
