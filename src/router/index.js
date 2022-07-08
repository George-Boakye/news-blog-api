import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechView from '../views/TechnologyView.vue'
import BusinessView from '@/views/BusinessView.vue'
import HealthView from '@/views/HealthView.vue'
import NewsPageView from '@/views/NewsPageView.vue'
import SearchView from '@/views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'global',
    component: HomeView
  },
  {
    path: '/technology',
    name: 'technology',
    component: TechView,
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessView
  },
  {
    path: '/health',
    name: 'health',
    component: HealthView
  },
  {
    path: '/newsPage/:title/:id',
    name: 'NewsPage',
    component: NewsPageView,
    props:true,
  },
  {
    path: '/newsPage/:searched',
    name: 'Search',
    component: SearchView,
    props:true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
