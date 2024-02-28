import { createRouter, createWebHistory } from 'vue-router'
import HomeScreenView from '../views/HomeScreenView.vue'
import MenuScreenView from '@/views/MenuScreenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeScreenView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MenuScreenView
    }
  ]
})

export default router
