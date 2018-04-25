<style>
.comment {
  margin-top: 15px;
  /* border-top: 1px solid #ebeef5; */
  display: flex;
  flex-direction: row;
  
  
}
.comment_left{
    min-width:80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    /* background-color: aquamarine; */
}
.comment_left_active{
    min-width:95%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    /* background-color: aquamarine; */
}
.comment_right{
    min-width:80px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(209, 87, 193); */
    margin-left: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.grow-enter,
.grow-leave-to {
    width: 100%;
}
.grow-enter-active,
.grow-leave-active {
    animation: grow_animation 0.8s reverse;
}

@keyframes grow_animation {
    from{
        width: 100%;
    }
    to {
        width: 80%;
    }
}

</style>

<template>
  <div class="comment">
    <div class="comment_left">
        <transition name="grow">
            <el-input class="commentInput" @focus="inputfocus" @blur="inputblur" v-model="commentData"  placeholder="评论"></el-input>
        </transition>
    </div>
    <div class="comment_right">
        <transition name="fade">
            <el-button v-show="animate_false">点击我</el-button>
        </transition>
    </div>


    <!-- <el-input class="commentInput" v-model="commentData" @focus="inputfocus" placeholder="评论"></el-input>
    <transition name="fade" mode="out-in">
       <el-button v-show="isClick">点击我</el-button>
    </transition> -->
<!-- 
    <transition name="in">
        <div class="test" v-show="isClick"></div>
    </transition>
    <transition name="out">
        <div class="tt" v-show="!isClick"></div>
    </transition> -->
   </div>

</template>


<script>
export default {
  data() {
    return {
      commentData: "",
      isClick: false,
      animate_false:false
    };
  },
  methods: {
    inputfocus() {
      this.isClick = true;
      this.animate_false=true;
    },
    inputblur(){
      this.animate_false=false;
    }
  }
};
</script>
