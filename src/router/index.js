import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/mahasiswa/Home.vue'
import Akademik from '../views/mahasiswa/Akademik.vue'
import Kalender from '../views/mahasiswa/Kalender.vue'
import Keuangan from '../views/mahasiswa/Keuangan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    alias: ['/'],
    name: 'Dashboard',
    component: Home
    //component: () => import(/* webpackChunkName: "dashboard" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/akademik',
    name: 'Akademik',
    component: Akademik
    //component: () => import(/* webpackChunkName: "dashboard" */ '../views/Upload.vue')
  },
  {
    path: '/keuangan',
    name: 'Keuangan',
    component: Keuangan
    //component: () => import(/* webpackChunkName: "dashboard" */ '../views/Upload.vue')
  },
  {
    path: '/kalender',
    name: 'Kalender',
    component: Kalender
    //component: () => import(/* webpackChunkName: "dashboard" */ '../views/Upload.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.auth.isLoggedIn){
    next({ name: 'Login' })
  } else if(to.name == 'Login' && store.state.auth.isLoggedIn) {
    next({ name: 'Dashboard' })
  }else{
    next();
  }
})

export default router
