import Vue from 'vue'
import Router from 'vue-router'
import Trend from '@/pages/trend'
import Upload from '@/components/upload'
import Register from '@/pages/register'
import Login from '@/pages/login'
import index from '@/pages/index'
import Setting from '@/pages/setting'
import Find from '@/pages/find'
import Related from '@/pages/related'
import About from '@/pages/about'
import Doc from '@/pages/doc'
import test from '@/pages/test'
import UserDetail from '@/pages/userdetail'

Vue.use(Router)

export default new Router({
  mode: "history",
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
          component: Setting,
          meta: {
            requiredAuths: true
          }
        },
        {
          path: '/trend',
          component: Trend,
          meta: {
            requiredAuths: true
          }
        },
        {
          path: '/find',
          component: Find,
          meta: {
            requiredAuths: true
          }
        },
        {
          path: '/related',
          component: Related,
          meta: {
            requiredAuths: true
          }
        },
        {
          path: '/about',
          component: About
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/doc',
      component: Doc
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/trends',
      component: Trend
    },
    {
      path: '/user/:nickname',
      component: UserDetail,
    }
  ]
})
