import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }, {
    path: '/userManage',
    name: 'userManage',
<<<<<<< HEAD
    component: () => import('../views/userManage')
  },
  {
    path: '/userDetails',
    name: 'userDetails',
    component: () => import('../views/userManage/userDetails.vue')
=======
    component: () => import('../views/userManage.vue')
  }, {
    path: '/roleManage',
    name: 'roleManage',
    component: () => import('../views/roleManage')
>>>>>>> dev
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
