// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from '@/store/index'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = axios
// Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.HOST = '/api'

axios.interceptors.request.use(function (config) {
  config.headers.token = localStorage.getItem('token')
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token") != null) {
    axios.get('/api/user/userInfo').then(res => {
      store.commit("setUserInfo", res.data.data)
    })
  }
  if (to.meta.title) {
    document.title = to.meta.title + '- Zone'
  }
  if (to.meta.requiredAuths) { // 判断该路由是否需要登录权限
    if (localStorage.getItem("token") != null) {
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
