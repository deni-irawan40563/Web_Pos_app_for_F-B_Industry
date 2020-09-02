import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/History',
  name: 'History',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
},
{
  path: '/main',
  name: 'Main',
  component: () => import('../views/Main.vue')
},
{
  path: '/edit',
  name: 'edit',
  component: () => import('../views/edit.vue')
},
{
  path: '/register',
  name: 'register',
  component: () => import('../views/registered.vue')
},
{
  path: '/coba',
  name: 'coba',
  component: () => import('../views/coba.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
