import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './main'
import admin from './admin'

import Login from '@/views/login/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    admin,
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    main,
    

  ]
})

export default router
