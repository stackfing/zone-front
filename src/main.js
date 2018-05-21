// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import store from '@/store/index'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.HOST = '/api'

Vue.http.interceptors.push((request, next) => {
  request.headers.set("token", localStorage.getItem("token"))

  next(function (response) {
    // if (response.status == 403) {
    //   console.log()
    //   this.$router.push('/login')
    // }
    return response;
  });
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + '- QZone'
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
