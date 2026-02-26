import { createRouter, createWebHistory } from 'vue-router'
import Base from '@/views/Base.vue'
import ToppingList from '@/views/ToppingList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base,
    },
    {
      path: '/toppinglist',
      name: 'ToppingList',
      component: ToppingList,
    },
  ],
})

export default router
