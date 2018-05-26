<template>
  <div class="mycontainer">
    <div class="head">
      <div class="bio">
        <img src="../assets/up.jpg" alt="background" class="bg">
        <div class="desc">
          <h3>@{{$store.state.userInfo.nickname}}</h3>
          <p>{{$store.state.userInfo.signature}}</p>
        </div>
      </div>
      <div class="avatarcontainer">
        <img :src="$store.state.userInfo.avatar" alt="avatar" class="avatar">
        <div class="hover">
          <div class="icon-twitter"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="data">
        <ul>
          <li>
            1122
            <span>日记</span>
          </li>
          <li>
            {{friendSize}}
            <span>朋友</span>
          </li>
          <!-- <li>
            20
            <span>关注</span>
          </li> -->
        </ul>
      </div>
      <!-- <div class="follow" @click="followMe" :class="followed ? 'followed' : ''"><div class="icon-twitter" ></div> {{test}}</div> -->
      <div class="qrcode_container">
        <center>
          <vue-qrcode :value=qrvalue :options="{size:100}"></vue-qrcode>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrcode from "@xkeshi/vue-qrcode";
export default {
  data() {
    return {
      test: "粉我",
      followed: false,
      qrvalue: "http://www.stackfing.com",
      friendSize: 0
    };
  },
  props: ["userInfo"],
  components: {
    VueQrcode
  },
  methods: {
    followMe() {
      this.followed = true;
    }
  },
  mounted() {
    this.friendSize = this.$store.state.friendInfo.length;
    this.qrvalue =
      window.location.protocol +
      "//" +
      window.location.host +
      "/user/" +
      encodeURI(this.$store.state.userInfo.nickname);
  }
};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: #ecf0f1;
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
}

.head {
  display: block;
  overflow: hidden;
  position: relative;
  padding-bottom: 2em;
  -moz-border-radius-topleft: 8px;
  -webkit-border-top-left-radius: 8px;
  border-top-left-radius: 8px;
  -moz-border-radius-topright: 8px;
  -webkit-border-top-right-radius: 8px;
  border-top-right-radius: 8px;
}

.mycontainer {
  width: 320px;
  height: 450px;
  /* margin: 3em auto 1em auto; */
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  padding-bottom: 1.5em;
  background-color: #dde1e2;
  -webkit-box-shadow: #bdc3c7 0 5px 5px;
  -moz-box-shadow: #bdc3c7 0 5px 5px;
  box-shadow: #bdc3c7 0 5px 5px;
}

.bg {
  border-bottom: 3px solid #5cc0ff;
}

.bio:hover > .desc {
  cursor: pointer;
  opacity: 1;
}

.avatarcontainer {
  position: absolute;
  bottom: 3px;
  right: 0;
  left: 0;
  margin: auto;
  width: 70px;
  height: 70px;
  display: block;
}

.avatar {
  width: 70px;
  height: 70px;
  border: 3px solid #5cc0ff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.avatar img {
  width: 65px;
  height: 65px;
}
.avatar:hover + .hover {
  opacity: 1;
  cursor: pointer;
}

.hover {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #3498db;
  top: 0;
  font-size: 1.8em;
  text-align: center;
  color: white;
  line-height: 64px;
  opacity: 0;
  font-family: "FontAwesome";
  font-weight: 300;
  border: 3px solid #5cc0ff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}

.data {
  margin-top: 0.6em;
  color: #81878b;
}
.data ul {
  margin: 0;
  padding: 0;
}
.data li {
  /* width: 32%; */
  width: 48%;
  text-align: center;
  display: inline-block;
  font-size: 1.5em;
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  border-right: solid 1px #bdc3c7;
}
.data li:last-child {
  border: none;
}
.data li span {
  display: block;
  text-transform: uppercase;
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  font-size: 0.5em;
  margin-top: 0.6em;
  font-weight: 700;
}

.desc {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 171px;
  padding: 1.2em 1em 0 1em;
  color: white;
  text-align: center;
  opacity: 0;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.desc h3 {
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.desc p {
  font-size: 0.9em;
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  line-height: 1.5em;
}

.follow {
  margin: 1.5em auto 0 auto;
  background-color: #2589cc;
  width: 150px;
  color: white;
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  text-align: center;
  padding: 0.5em;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}
.follow:hover {
  background-color: #167abd;
  cursor: pointer;
}
.followed {
  background-color: #34cf7a;
}
.qrcode_container {
  margin-top: 30px;
}
</style>