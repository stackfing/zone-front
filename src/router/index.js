import Vue from 'vue'
import Router from 'vue-router'
import Trend from '@/pages/trend'
import Upload from '@/components/upload'
import Register from '@/pages/register'
import Login from '@/pages/login'
import Exit from '@/pages/exit'
import index from '@/pages/index'
import Setting from '@/pages/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: "/trend",
      meta: {
        requiredAuths: true
      },
      children: [
        {
          path: '/settings',
          component: Setting
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/trend',
          component: Trend
        }
      ]
    },
    // {
    //   path: '/upload',
    //   component: Upload,
    //   meta: {
    //     requiredAuths: true
    //   }
    // },
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
    },
  ]
})
