import { createRouter, createWebHistory } from 'vue-router'
import HomeScreenView from '../views/HomeScreenView.vue'
import MenuScreenView from '@/views/MenuScreenView.vue'
import BookingScreenView from '@/views/BookingScreenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeScreenView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuScreenView
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingScreenView
    }
  ]
})

export default router
