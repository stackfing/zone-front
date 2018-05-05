<template>
  <div id="app">
    <!-- <div style="position:fixed;">
      <router-link to="/">Home</router-link>
      <router-link to="register">Register</router-link>
      <router-link to="exit">Exit</router-link>
    </div> -->
      <transition name='fade' mode="out-in">
       <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* margin-top: 60px; */
}
</style>
