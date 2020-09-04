import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '.././store/index'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: { requiresVisitor: true }
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
  meta: { requiresAuth: true },
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
  meta: { requiresVisitor: true },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/main',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
