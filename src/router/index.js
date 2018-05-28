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
import NotFound from '@/pages/notfound'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: index,
      redirect: "/trend",
      meta: {
        requiredAuths: true,
        title: '动态'
      },
      children: [
        {
          path: '/settings',
          component: Setting,
          meta: {
            requiredAuths: true,
            title: '设置'
          }
        },
        {
          path: '/trend',
          component: Trend,
          meta: {
            requiredAuths: true,
            title: '动态'
          }
        },
        {
          path: '/find',
          component: Find,
          meta: {
            requiredAuths: true,
            title: '发现世界'
          }
        },
        {
          path: '/related',
          component: Related,
          meta: {
            requiredAuths: true,
            title: '与我相关'
          }
        },
        {
          path: '/about',
          component: About,
          meta: {
            requiredAuths: true,
            title: '关于'
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        requiredAuths: false,
        title: '登录'
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        requiredAuths: false,
        title: '注册'
      }
    },
    {
      path: '/doc',
      component: Doc,
      meta: {
        requiredAuths: false,
        title: 'ZONE - Doc'
      }
    },
    {
      path: '/test',
      component: test,
      meta: {
        requiredAuths: false,
        title: '关于'
      }
    },
    {
      path: '/trends',
      component: Trend,
      meta: {
        requiredAuths: false,
        title: '关于'
      }
    },
    {
      path: '/user/:nickname',
      component: UserDetail,
      meta: {
        requiredAuths: false,
        title: '详情'
      }
    },
    {
      path: '/find',
      component: Find,
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
