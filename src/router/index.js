import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Trend from '@/pages/trend'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Trend
    },
    {
      path: '/test',
      component: Trend
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
