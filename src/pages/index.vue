<style scoped>
.container {
  min-width: 1000px;
  margin: 0 auto;
}
.slide_container {
  width: 250px;
  height: 300px;
  /* border: solid 1px red; */
}

* {
  list-style: none;
}

.action_list {
  box-shadow: 0 0 1px #888888;
}

.action_list li {
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.action_list li:hover {
  transition: all 0.8s;
  background-color: #87ceff;
  cursor: pointer;
}

.sp_friend_trend {
  width: 16px;
  height: 16px;
  background-image: url(../assets/jpgs.png);
  background-position: -588px -182px;
  display: none !important;
}

.action_list_selected {
  /* background-color: rgba(196, 191, 191, 0.9); */
}

.left_slide_container {
  margin-right: 30px;
  /* background-color: rgba(223, 223, 223, 0.6); */
  /* background-color: #87CEFA */
}

.center_container {
  display: flex;
  justify-content: center;
  width: 592px;
}

.body_container {
  display: flex;
  min-height: 800px;
  /* min-height: 100%; */
  padding-bottom: 100px;
  color: #2c3e50;
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  background-color: #e9e9e9;
  padding-top: 300px;
  display: flex;
  justify-content: center;
  min-width: 1160px;
}

.right_slide_container {
  margin-left: 30px;
  background-color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.router-link-active {
  /* background-color: #7e7e7e86 */
  background-color: #87ceff;
}

.header {
  position: fixed;
  width: 100%;
  height: 40px;
  /* background-color: #007bff!important; */
  background-color: #87ceff;
  z-index: 3;
}

.friend_list_header {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  /* background-color: rgb(158, 187, 245); */
  background-color: #87ceff;
  height: 30px;
  /* font-size: 30px; */
  line-height: 30px;
}

.friend_list_body {
  /* background-color: rgb(233, 233, 106); */
  min-height: 270px;
}

.friend_list_item {
  /* background-color: rgb(75, 197, 197); */
  padding: 5px;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #a5d325;
  cursor: pointer;
}

.friend_list_item_left {
  width: 50px;
  /* background-color: rgb(184, 235, 90); */
}

.friend_list_item_right {
  width: 200px;
}

.friend_list_item_photo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.friend_list_item_nickname {
  /* background-color: rgb(224, 141, 72); */
  height: 25px;
  padding-left: 10px;
}

.friend_list_item_personsign {
  /* background-color: rgb(75, 197, 197); */
  height: 25px;
  line-height: 25px;
  font-size: 10px;
  padding-left: 5px;
  color: gray;
}
</style>

<template>
  <div class="container">
    <div class="header">
      <div></div>
      <!-- <router-link to="/exit" style="float:right">退出</router-link> -->
      <a href="javascript:void(0)" style="float:right" @click="exit">退出</a>
      <div class="clearfix"></div>
    </div>
    <div class="body">
      <div class="body_container">
        <div class="left_slide_container slide_container">
          <ul class="action_list">
            <router-link tag="li" to="/trend">朋友动态</router-link>
            <router-link tag="li" to="/related">与我相关</router-link>
            <router-link tag="li" to="/find">发现世界</router-link>
            <router-link tag="li" to="/settings">设置</router-link>
            <router-link tag="li" to="/about">关于我</router-link>
            <router-link tag="li" to="/doc">文档</router-link>
          </ul>
        </div>
        <div class="center_container">
          <router-view></router-view>
        </div>
        <div class="right_slide_container slide_container">
          <div class="friend_list_header">
            <center>好友列表</center>
          </div>
          <div class="friend_list_body">
            <ul>
              <li v-for="item in friendSlide">
                <li>
                  <div class="friend_list_item">
                    <div class="friend_list_item_left">
                      <!-- <div class="friend_list_item_photo"> -->
                      <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg" class="friend_list_item_photo" />
                      <!-- </div> -->
                    </div>
                    <div class="friend_list_item_right">
                      <div class="friend_list_item_nickname">
                        <span>敏子</span>
                      </div>
                      <div class="friend_list_item_personsign">
                        <span>个性签名..........</span>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import trend from "@/pages/trend";
import setting from "@/pages/setting";
import register from "@/pages/register";
import find from "@/pages/find";
import related from "@/pages/related";
import doc from "@/pages/doc";

export default {
  data() {
    return {
      comp: "trend"
    };
  },
  components: {
    trend,
    setting,
    register,
    find,
    related,
    doc
  },
  methods: {
    toggleSlide(item) {},
    exit() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  }
};
</script>
