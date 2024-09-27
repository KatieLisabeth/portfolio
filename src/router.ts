import { createRouter, createWebHistory } from 'vue-router'
import ResumeEl from './components/elements/ResumeEl.vue'
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
    component: ResumeEl
  }
]

const router = createRouter({
  history: createWebHistory('/portfolio'),
  routes
})

export default router
