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
        },
        setFriendInfo(state, friendInfo) {
            state.friendInfo = friendInfo
        }
    }
})