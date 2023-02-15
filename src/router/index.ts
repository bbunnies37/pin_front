import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      // route level code-splitting
      // this generates a separate chunk (landing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('src/views/Landing.vue')
    },
    {
      path: '/pinDetail',
      name: 'pinDetail',
      // route level code-splitting
      // this generates a separate chunk (landing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('src/views/PinDetail.vue')
    },
  ]
})

export default router
