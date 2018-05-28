<template>
    <div class="notfound">
        <div class="header">ZONE</div>
        <div style="font-size:5em;">404</div>
        <br>
        <div style="font-size:1em;">这个页面飞到外星去了</div>
        <br>
        <router-link to="/">GO HOME</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>

.notfound {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #2089DA;
    color: #FBFAED;
    justify-content: center;
    align-items: center;
}
a {
  color: #FBFAED;
  text-decoration: none;
}
a:visited {
  color: #FBFAED;
  text-decoration: none;
}
.header {
    position: fixed;
    top: 30px;
    left: 30px;
    font-size: 1.3em;
}
</style>
