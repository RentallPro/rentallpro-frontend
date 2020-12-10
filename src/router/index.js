import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '../views/404.vue'
import Home from '../views/Auth/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'ErrorPage',
    component: ErrorPage,

  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/SignUp.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/ResetPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
