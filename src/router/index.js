import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView')
  },
  {
    path: '/bilibiliFooter',
    name: 'bilibiliFooter',
    component: () => ('../components/FooterBar/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
