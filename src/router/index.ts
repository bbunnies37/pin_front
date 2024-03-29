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
      component: () => import('../views/Landing.vue')
    },
        {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (landing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    },
    {
      path: '/pin-detail',
      name: 'pinDetail',
      // route level code-splitting
      // this generates a separate chunk (landing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PinDetail.vue')
    },
    {
      path: '/idea-pin-builder',
      name: 'createIdeaPin',
      // route level code-splitting
      // this generates a separate chunk (landing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateIdeaPin.vue')
    },
    {
      path: '/pin-builder',
      name: 'createPin',
      component: () => import('../views/CreatePin.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/my-page/:username',
      name: 'myPage',
      component: () => import('../views/MyPage.vue')
    },
  ]
})

export default router
