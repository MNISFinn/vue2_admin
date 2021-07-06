import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../views/Layout/Layout";
import Forbidden from '../views/ErrorPage/403'
import NotFound from '../views/ErrorPage/404'

Vue.use(VueRouter)

// 初始化路由
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

// 动态加载的路由
export const DynamicRoutes = [
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
  {
    path:'/403',
    component:Forbidden
  },
  {
    path:'*',
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
