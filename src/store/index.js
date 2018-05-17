import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import userInfo from './userInfo'
import friendInfo from './friendInfo'

export default new vuex.Store({
    modules: {
        userInfo: userInfo,
        friendInfo: friendInfo
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
            console.log('用户信息为: ' + state.userInfo)
        },
        setFriendInfo(state, friendInfo) {
            state.friendInfo = friendInfo
        }
    }
})