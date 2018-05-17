import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        nickname: null,
        age: 12
    },
    mutations: {
        // getUserInfo(state) {
        // //   state.userInfo = userInfo;
        // console.log('asfasdffssfd')
        // }
      }
})