import { createRouter, createWebHistory } from 'vue-router'
import CvView from './views/CvView.vue'
import MainView from './views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/resume',
    name: 'CV',
    component: CvView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
