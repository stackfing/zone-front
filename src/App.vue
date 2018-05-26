<template>
  <div id="app">
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
  },
  created() {
    try {
        document.body.removeChild(document.getElementById('appLoading'))
        setTimeout(function() {
          // document.getElementById('app').style.display = 'block';
        }, 500)
      } catch (e) {
      }
  }
};
</script>

<style>
::-webkit-scrollbar{
  display:none;
}
/* .selector::-webkit-scrollbar { display: none } */
html,body{overflow:hidden;overflow-y:auto;}
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
li {
  list-style: none;  
}
img {
  object-fit: cover;  
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
