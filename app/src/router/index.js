import { createRouter, createWebHistory } from 'vue-router'
import Base from '@/views/Base.vue'
import Toppings from '@/components/Toppings.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base
    },
    {
      path: '/toppings',
      name: 'Toppings',
      component: Toppings
    }
  ],
})

export default router
