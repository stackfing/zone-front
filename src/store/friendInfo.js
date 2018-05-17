import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: [
        {
            name: 'zs',
            avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3552518876,4098254611&fm=27&gp=0.jpg'
        },
        {
            name: 'ls',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526534584432&di=cdf8cc286ce2068a9d35efc317be62b5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180508%2Fdbd23d6048a6425bbc520ff1eeec321b.jpeg'
        },
    ]
})