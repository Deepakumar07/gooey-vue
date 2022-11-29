import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('@/components/pages/TheLogin.vue')
const LandingPage = () => import('@/components/pages/TheLanding.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/',
      component: LandingPage,
    },
  ],
})

export default router
