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
    path: '/roleManage',
    name: 'roleManage',
    component: () => import('../views/roleManage')
  }, {
    path: '/userManage',
    name: 'userManage',
    component: () => import('../views/userManage')
  }, {
    path: '/transfer',
    name: 'transfer',
    component: () => import('../views/userManage/transfer.vue')
  }, {
    path: '/userDetails',
    name: 'userDetails',
    component: () => import('../views/userManage/userDetails.vue')
  }, {
    path: '/organizationManage',
    name: 'organizationManage',
    component: () => import('../views/organizationManage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
