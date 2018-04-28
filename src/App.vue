<template>
  <div id="app">
    <router-link to="register">Home</router-link>
      <transition name='fade' mode="out-in">
       <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style>

.fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
*{
  margin: 0px;
  padding: 0px;
}
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-image: url(./assets/background.jpg);

  background-repeat: no-repeat;
      background-position: center top;
    background-attachment: scroll;
  background-color: #E9E9E9;
  /* margin-top: 60px; */
}

 
</style>
