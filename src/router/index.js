import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '../views/404.vue'
import Home from '../views/Auth/Home.vue'
import MarketPlace from '@/views/Marketplace'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/layout/auth.vue'), // all auth routes use the auth layout
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/signup',
        name: 'SignUp',

        component: () => import(/* webpackChunkName: "about" */ '../views/Auth/SignUp.vue')
      },
      {
        path: '/reset-password',
        name: 'ResetPassword',

        component: () => import(/* webpackChunkName: "about" */ '../views/Auth/ResetPassword.vue')
      }
    ]
  },
  {
    path: "/",
    name: "market-place",
    component: () => import('@/layout/blank.vue'), // all other routes are stacked here
    children: [{
      path: '/market-place',
      name: 'ResetPassword',
      component: MarketPlace

    }]
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: ErrorPage,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
