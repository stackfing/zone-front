<template>
  <div class="container">
    <div class="header" @dblclick="backtotop" onselectstart="return false">
      <el-dropdown trigger="click" style="float:right" @command="handleTopCommand">
        <span class="el-dropdown-link" style="line-height:40px">
          {{$store.state.userInfo.nickname}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="related">评论</el-dropdown-item>
          <el-dropdown-item command="related">我的消息</el-dropdown-item>
          <el-dropdown-item command="settings">设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="exit">
            <span>注销</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="clearfix"></div>
    </div>
    <div class="body" style="">
      <div class="body_top">
        <div class="head_avatar">
          <img class="head_avatar_img" width="128px" height="128px" :src="$store.state.userInfo.avatar" />
        </div>
      </div>
      <div class="body_bottom">
        <div class="body_container">
          <div class="left_slide_container slide_container">
            <ul class="action_list">
              <router-link tag="li" to="/trend" @click.native="friendDongtai">朋友动态</router-link>
              <router-link tag="li" to="/related" @click.native="cancelBadge">
                <el-badge :value="12" :max="3" :hidden="badgeHidden">
                  <!-- <el-button size="small">评论</el-button> -->
                  <span>与我相关</span>
                </el-badge>
              </router-link>
              <router-link tag="li" to="/find" @click.native="findWord">
                <el-badge is-dot class="item">发现世界</el-badge>
              </router-link>
              <router-link tag="li" to="/settings" @click.native="friendDongtai">设置</router-link>
              <router-link tag="li" to="/about">关于</router-link>
              <router-link tag="li" to="/doc">文档</router-link>
            </ul>
          </div>
          <div class="center_container" :class="isfindword ? '' : 'findfriend' ">
            <transition mode="out-in" name="fade">
              <router-view></router-view>
            </transition>
          </div>
          <!-- 好友列表 start -->
          <div v-if="isFindWord" class="right_slide_container slide_container">
            <div class="friend_list_header">
              <center>好友列表</center>
            </div>
            <div class="friend_list_body">
              <ul>
                <!-- <router-link tag="li" to="/trend"></router-link> -->
                <div v-for="item in $store.state.friendInfo">
                  <router-link tag="li" :to="{path: '/user/' + item.nickname}" class="friend_li">
                    <div class="friend_list_item">
                      <div class="friend_list_item_left">
                        <img :src='item.avatar' class="friend_list_item_photo" />
                      </div>
                      <div class="friend_list_item_right">
                        <div class="friend_list_item_nickname">
                          <span>{{item.nickname}}</span>
                        </div>
                        <div class="friend_list_item_personsign">
                          <span style="overflow:hidden;">个性签名即将上线，敬请期待!</span>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </ul>
            </div>
          </div>
          <!-- 好友列表 end -->
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
import userInfo from "../store/userInfo";

export default {
  data() {
    return {
      // userInfo: {},
      // friendList: {},
      badgeHidden: false,
      isFindWord: true,
      isfindword: true
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
    backtotop() {
      var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 200); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16); // how fast to scroll (this equals roughly 60 fps)
    },
    findWord() {
      this.isFindWord = false;
      this.isfindword = false;
    },
    friendDongtai() {
      this.isFindWord = true;
      this.isfindword = true;
    },
    toggleSlide(item) {},
    exit() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    },
    getUserInfo() {
      if (this.$store.state.userInfo.status == 0) {
        this.$message({
          message: "您的账号还未激活，请验证邮箱以激活账号。",
          type: "warning"
        });
        this.$confirm(
          "您的账号还未激活，请验证邮箱以激活账号，点击确定将发送激活邮件。",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
          .then(() => {
            //请求后台发送邮件
            this.$message({
              type: "success",
              message: "我们已经发送激活链接在您的邮箱中，请注意查收!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "账号未激活各种功能将受到限制。"
            });
          });
      }
    },
    getFriendList() {
      this.$http.get("/api/user/friendList").then(res => {
        this.friendList = res.data.data;
        this.$store.commit("setFriendInfo", this.friendList);
      });
    },
    cancelBadge() {
      this.badgeHidden = true;
    },
    handleTopCommand(command) {
      this.$router.push({ path: "/" + command });
    },
    handleRoute() {
      console.log(this.$route.path);
      switch (this.$route.path) {
        case "/trend":
        case "/about":
        case "/related":
        case "/settings":
          this.friendDongtai();
          break;
        case "/find":
          this.findWord();
          break;
      }
    }
  },
  created() {
    this.getUserInfo();
    this.getFriendList();
    this.handleRoute();
  }
};
</script>

<style scoped>
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  background-color: #e9e9e9;
}
.findfriend {
  width: 872px !important;
}

.container {
  min-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
}
.slide_container {
  width: 250px;
  height: 300px;
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
  transition: all 0.8s;
}

.action_list li:hover {
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

.left_slide_container {
  margin-right: 30px;
}

.center_container {
  display: flex;
  justify-content: center;
  width: 592px;
  min-height: 100%;
}

.backtotop {
  width: 200px;
  height: 200px;
  position: fixed;
  right: 300px;
  bottom: 100px;
  background: red;
}

.body_container {
  display: flex;
  min-height: 100vh;
  color: #2c3e50;
  /* padding-top: 250px; */
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
  background-color: #87ceff;
}

.header {
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #87ceff;
  z-index: 3;
}

.friend_list_header {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #87ceff;
  height: 30px;
  line-height: 30px;
}

.friend_list_body {
  min-height: 270px;
}

.friend_list_item {
  padding: 5px;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #a5d325;
  cursor: pointer;
}

.friend_list_item_left {
  width: 50px;
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
  height: 25px;
  padding-left: 10px;
}

.friend_list_item_personsign {
  height: 25px;
  line-height: 25px;
  font-size: 10px;
  padding-left: 5px;
  color: gray;
}
.el-dropdown-link {
  cursor: pointer;
}
.friend_li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.body_top {
  padding-top: 80px;
  padding-bottom: 40px;
  /* padding-top: 40px; */
  min-width: 1160px;
  margin: 0 auto;
}
.body_bottom {
  flex-direction: column;
  display: flex;
  min-height: 100vh;
}
.head_avatar {
  margin-left: 280px;
  border-radius: 3px;
}
.head_avatar_img {
  border-radius: 2px;
  border: #fff 3px solid;
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .left_slide_container,
  .slide_container {
    display: none;
  }
  .container {
    min-width: 0;
  }
  .body_container {
    min-width: 0;
  }
  .body_top {
    min-width: 100%;
    display: flex;
  }
  .head_avatar {
    margin: 0 auto;
    /* display: flex; */
    /* flex-direction: row; */
    /* position: absolute; */
    /* margin-top: -200px; */
    /* margin-left: 33%; */
  }
}
</style>