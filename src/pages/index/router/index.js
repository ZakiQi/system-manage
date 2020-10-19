import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/roleManage',
    name: 'roleManage',
    component: () => import('../views/roleManage')
  }, {
    path: '/moduleManage',
    name: 'moduleManage',
    component: () => import('../views/moduleManage')
  }, {
    path: '/dataAuthManage',
    name: 'dataAuthManage',
    component: () => import('../views/dataAuthManage')
  }, {
    path: '/operationLog',
    name: 'operationLog',
    component: () => import('../views/operationLog')
  }, {
    path: '/systemLog',
    name: 'systemLog',
    component: () => import('../views/systemLog')
  }, {
    path: '/dataFilter',
    name: 'dataFilter',
    component: () => import('../views/dataFilter')
  }, {
    path: '/sendMessage',
    name: 'sendMessage',
    component: () => import('../views/sendMessage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
