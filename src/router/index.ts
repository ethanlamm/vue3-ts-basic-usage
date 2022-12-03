import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "layout",
      component: Layout,
      children: [
        {
          path: '/',
          name: 'responsive',
          component: () => import('@/views/Responsive.vue')
        },
        {
          path: '/event',
          name: 'event',
          component: () => import('@/views/Event.vue')
        },
      ]
    }
  ]
})

export default router
