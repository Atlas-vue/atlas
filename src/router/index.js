import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '@/views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Views.Home,
        children: [
          {
            path: '/home/my',
            name: 'Edit',
            component: Views.My
          },
          {
            path: '/home/edit',
            name: 'Edit',
            component: Views.Edit
          },
          {
            path: '/home/document',
            name: 'Document',
            component: Views.Document
          },
          {
            path: '/home/example',
            name: 'Example',
            component: Views.Example
          },
          {
            path: '/home/help',
            name: 'Help',
            component: Views.Help
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
