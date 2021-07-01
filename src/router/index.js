import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../views/Layout/Layout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/Home/Index.vue')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/Home/Order.vue')
      },
    ]
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
