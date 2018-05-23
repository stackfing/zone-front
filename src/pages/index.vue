<template>
  <div class="container">
    <div class="header">
      <div>
        <!-- 您好 {{userInfo.nickname}} -->
      </div>
      <!-- <router-link to="/exit" style="float:right">退出</router-link> -->
      <!-- <a href="javascript:void(0)" style="float:right" @click="exit">退出</a> -->
      <el-dropdown trigger="click" style="float:right" @command="handleTopCommand">
        <span class="el-dropdown-link" style="line-height:40px">
          {{$store.state.userInfo.nickname}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="related">
            <!-- <router-link to="/related">查看评论</router-link> -->评论
          </el-dropdown-item>
          <el-dropdown-item command="related">我的消息</el-dropdown-item>
          <el-dropdown-item command="settings">设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="exit">
            <span >注销</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="clearfix"></div>
    </div>
    <div class="body">
      <div class="body_top">
        <!-- <div class="head_avatar">
          <img class="head_avatar_img" width="128px" height="128px" src="../assets/smiler.png" />
        </div> -->
      </div>
      <div class="body_bottom">
        <div class="body_container">
          <!-- <div style="width:200px;height:200px;background-color:red;"></div> -->
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
      userInfo: {},
      friendList: {},
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
      this.$router.replace('/login')
    },
    getUserInfo() {
      this.$http.get("/api/user/userInfo").then(res => {
        if (res.status == 200) {
          this.userInfo = res.data.data;
          this.$store.commit("setUserInfo", this.userInfo);
          if (this.userInfo.status == 0) {
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
          //添加用户其他状态
        }
      });
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
          console.log("asdfsdfa");
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
.findfriend {
  width: 872px !important;
}

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
  transition: all .8s;
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
  /* height: 100%; */
  min-height: 1000px;
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
  padding-top: 50px;
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
.el-dropdown-link {
  cursor: pointer;
}
.friend_li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.body_top {
  /* height: 200px; */
  padding-top: 40px;
  display: flex;
  /* background-color: red; */
}
.body_bottom {
  /* height: 200px; */
  flex-direction: column;
  display: flex;
}
.head_avatar {
  width: 100px;
  height: 100px;
  /* background-color: gray; */
  position: absolute;
  left: 300px;
  top: 200px;
  border-radius: 3px;
  border: #d9d9d9 1px solid;
}
.head_avatar_img {
  border-radius: 2px;
  border: #fff 3px solid;
}
@media screen and (min-width: 320px) and (max-width: 480px){
  .left_slide_container,.slide_container{
    display: none;
  }
  .container {
    min-width: 0;
  }
  .body_container {
    min-width: 0;
  }
}
</style>