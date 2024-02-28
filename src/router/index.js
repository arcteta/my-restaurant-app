import { RouterView, createRouter, createWebHistory } from 'vue-router'
import HomeScreenView from '../views/HomeScreenView.vue'
import MenuScreenView from '@/views/MenuScreenView.vue'
import MenuBreakfastScreenView from '../views/MenuBreakfastScreenView.vue'
import MenuLunchScreenView from '@/views/MenuLunchScreenView.vue'
import MenuDinnerScreenView from '@/views/MenuDinnerScreenView.vue'
import BookingScreenView from '@/views/BookingScreenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeScreenView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: RouterView,
      children: [
        {
          path : '/menu',
          component: MenuScreenView
        },
        {
          path: 'menu-breakfast',
          component: MenuBreakfastScreenView
        },
        {
          path: 'menu-lunch',
          component: MenuLunchScreenView
        },
        {
          path: 'menu-dinner',
          component: MenuDinnerScreenView
        }
      ]
    },
    {
      path: '/booking',
      component: BookingScreenView,
    }
  ]
})

export default router
