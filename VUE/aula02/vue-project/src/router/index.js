import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/students/View.vue')
    },
    {
      path: '/students/create',
      name: 'studentCreate',
      component: () => import('../views/students/Create.vue')
    }
  ]
})

export default router
