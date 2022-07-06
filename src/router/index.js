import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechView from '../views/TechnologyView.vue'
import BusinessView from '@/views/BusinessView.vue'
import HealthView from '@/views/HealthView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/technology',
    name: 'Technology',
    component: TechView
  },
  {
    path: '/business',
    name: 'Business',
    component: BusinessView
  },
  {
    path: '/health',
    name: 'Health',
    component: HealthView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
