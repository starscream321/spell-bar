import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ShortPanel from '../views/ShortPanel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ShortPanel
  },
  {
    path: '/setting',
    name: 'setting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingShortPanel.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
