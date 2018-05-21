<template>
    <div class="test">
      <vue-waterfall-easy :width="numWidth" :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData">
       <template slot-scope="props">
        <div class="player_info">
            <div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>
            <div class="ticket">
              <!-- <mt-button @click="upLoadTicket(props.value.id)" size="small"><i class="tt tt-quanburen"></i>投票</mt-button> -->
            </div>
            <span class="name_span">{{props.value.nickName}}</span>
            <!-- <p class="num">{{props.index+1}}票</p> -->
          </div>
      </template>
    </vue-waterfall-easy>
    </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import { thisExpression } from 'babel-types';
export default {
  data() {
    return {
      imgsArr: [],
      group: 0, // request param
      numWidth:872
    };
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    initImgsArr(n, m) { //num 图片数量
      // var arr = []
      // for (var i = n; i < m; i++) {
      //   if (i == 2) {
      //   arr.push({ id:i,src: `https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/14.jpg`, href: 'https://www.baidu.com', info: '一些图片描述文字' })
          
      //   } else {
      //   arr.push({ id:i,src: `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3552518876,4098254611&fm=27&gp=0.jpg`, href: 'https://www.baidu.com', info: '一些图片描述文字' })
      //   }
      // }
      // return arr
    },
     fetchImgsData() {
       this.$http.get('/api/find').then(res => {
         this.imgsArr = res.data.data
        //  this.imgsArr = this.imgsArr.concat(res.data.data)
       })
     
      // this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
    },
  },
  created() {
    this.fetchImgsData();
    // this.imgsArr = this.initImgsArr(0, 20)
    // this.fetchImgsArr = this.initImgsArr(5, 10) // 模拟每次请求的新的图片的数据数据
  }
};
</script>

<style lang="scss">
// html,
// body,
// #app {
//   height: 100%; // 父元素必须要有高度
//   width: 100%; // 如果已经是block元素，则可以忽略
// }
a {
  color: #000;
  text-decoration: none;
  &:active {
    color: #000;
  }
  &:hover {
    text-decoration: none;
  }
}
.test {
  width: 100%;
  height: 100%;
  // width: 592px;
  // height: 800px;
}
::-webkit-scrollbar{
  display:none;
}
.player_info {
  padding: 10px;
  display: flex;
  flex-direction:column;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // position: relative;
  
}
.name_span{
  display: flex;
  justify-content: flex-end;
  
}
</style>