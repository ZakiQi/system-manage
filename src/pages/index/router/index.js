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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
