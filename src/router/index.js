import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '@/views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Views.Home
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Views.Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
