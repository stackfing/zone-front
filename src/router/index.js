import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Trend from '@/pages/trend'

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
    }
  ]
})
