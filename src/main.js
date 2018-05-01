// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.HOST = '/api'

Vue.http.interceptors.push((request, next) => {
  //request.credentials = true; // 接口每次请求会跨域携带cookie
  //request.method= 'POST'; // 请求方式（get,post）
  //request.headers.set('token','111') // 请求headers携带参数
  // request.headers.set("jwts", "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6IuW8oOS4iSIsImlkIjoxLCJleHAiOjE1MjUxOTU1MjUsImlhdCI6MTUyNTE0MTUyNX0.HFKHQluhUg-jsolSAyn8eU1402Hk_EVN7tn1y22XDQs")
  request.headers.set("jwts", localStorage.getItem("jwts"))
  
  next(function (response) {
    if (response.status == 403) {
      this.$router.push('/login')
    }
    return response;
  });
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuths) { // 判断该路由是否需要登录权限
    if (localStorage.getItem("jwts") != null) {
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
  components: { App },
  template: '<App/>'
})
