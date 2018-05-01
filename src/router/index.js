import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Trend from '@/pages/trend'
import Upload from '@/components/upload'
import Register from '@/pages/register'
import Login from '@/pages/login'
import Exit from '@/pages/exit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Trend,
      meta: {
        requiredAuths: true
      }
    },
    {
      path: '/upload',
      component: Upload,
      meta: {
        requiredAuths: true
      }
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/exit',
      component: Exit,
      meta: {
        requiredAuths: true
      }
    }
  ]
})
