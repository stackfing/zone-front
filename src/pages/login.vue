<style>
.inputclass{
    width: 80%;
    transition: all 0.8s;
}

.inputclass:hover {
    width: 100%;
}
@keyframes grows {
     0% {
       margin-left: 10px;
       
   }
   100% {
       margin-left: 100px;
    opacity: 0;
   }
}

.grow-enter,
.grow-leave {
    width: 800px;
}

.grow-enter-to,
.grow-leave-to {
    width: 1000px;
}

.grow-leave-active {
    transition: all .8s;
     /* animation: grows .8s; */
}
.grow-enter-active {
    transition: all .8s;
    /* animation: grows .8s reverse; */
}
</style>

<template>
    <div>
        <el-button @click="isCl = !isCl">点击</el-button>
        <transition name="grow">
            <el-input class="inputclass" v-show="isCl" @blur="inputblur" @focus="inputfocus"/>
        </transition>
    </div>
</template>

<script>
export default {
  data() {
      return {
          isCl: true
      }
  },
  methods: {
      inputblur() {
          console.log('sdf')
          this.isCl = false;
      },
      inputfocus() {
          console.log('sddsds')
          this.isCl = true;
      }
  }
}
</script>
