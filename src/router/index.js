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
import Link from '@/pages/link'
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
          component: Setting
        },
        {
          path: '/trend',
          component: Trend
        },
        {
          path: '/find',
          component: Find
        },
        {
          path: '/related',
          component: Related
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
      path: '/link',
      component: Link
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
      meta: {
        requiredAuths: false
      }
    }
  ]
})
