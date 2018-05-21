<template>
  <div class="message">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="divcontent">
          <div class="photo">
            <img class="a_img" :src="avatar" />
          </div>
          <div class="username_and_time">
            <div class="b_contant">
              <span>
                <a :href="'/user/' + nickName" class="username">{{nickName}}</a>
              </span>
              <span class="time">{{createTime|myDate}}</span>
            </div>
          </div>
          <div class="do_message_action">
            <el-dropdown @command="handleCommand" trigger="click" v-if="$store.state.userInfo.nickname != null">
              <el-button style="" type="text">操作</el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="share">分享</el-dropdown-item>
                <el-dropdown-item command="collect">收藏</el-dropdown-item>
                <el-dropdown-item command="neverseeit">不再看此动态</el-dropdown-item>
                <el-dropdown-item command="shield" divided>屏蔽此人</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="content">
        <p class="content_P">{{content}}</p>
        <template v-if="images != null">
          <div class="img_one" v-if="images.length==1">
            <!-- <img v-img style="width:90%;height:320px;margin-left:10px;" v-for="item in images" :src="item" />
             -->
            <img v-img style="max-width:100%" v-for="item in images" :src="item" />

          </div>
          <div v-else-if="images.length==2">
            <div class="img_two">
              <!-- <img v-img style="width:270px;height:220px;margin-left:5px;" v-for="item in images" :src="item" /> -->
              <img v-img style="padding: 3px;max-width:48%" v-for="item in images" :src="item" />
            </div>
          </div>
          <div v-else-if="images.length>=3&&images.leng<=9">
            <div class="img_more">
              <!-- <img v-img style="width:160px;height:120px;margin-left:3px;margin-bottom:-1px !important;" v-for="item in images" :src="item" /> -->
              <img v-img style="max-width:32%;padding:2px;" v-for="item in images" :src="item" />
            </div>
          </div>

          <div class="img_more" v-else-if="images.length>9">
            <template v-for="(item,index) in images">
              <img v-img style="max-width:32%;padding:2px;" :src="item" v-if="index <= 7" />
            </template>
            <img style="max-width:30%;padding:2px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526534584432&di=cdf8cc286ce2068a9d35efc317be62b5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180508%2Fdbd23d6048a6425bbc520ff1eeec321b.jpeg" />
          </div>
        </template>

        <div class="clearfix"> </div>
      </div>
      <div class="star" v-show="showStar">
        <span class="el-icon-star-on" style="font-size:15px;color:#409EFF"></span>&nbsp;
        <span v-if="starnum > 0">{{starnum}} 人觉得很赞</span>
        <span v-else-if="starnum == 0" style="color: gray">暂时没人点赞哦，快给好友点第一个赞吧！</span>
        <div style="float:right;display:inline">
          <i class="fui-icon" @click="star" v-if="$store.state.userInfo.nickname != null" :class="starE?'icon-op-praise':'icon-op-praise-hidden'" style="margin-top:-3px;"></i>
        </div>
        <div class="clearfix"></div>
      </div>
      <div v-for="item in commentList">
        <div class="comment_item">
          <div class="comment_item_photo">
          </div>
          <div class="comment_item_content">
            <a :href="'/user/' + item.user.nickName" class="username">{{item.user.nickName}}</a> :
            <!-- <a href="/user/">{{item.user.nickName}}</a> : -->
            <span>{{item.comment}}</span>
          </div>
        </div>
      </div>
      <docomment @updateComment="updateComment" :friendList="friendList" :messageId="messageId" v-if="$store.state.userInfo.nickname != null"></docomment>
    </el-card>

    <!-- <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span><a href="" class="username">1用户名</a></span>
        <br> width="50" height="50"
        <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
    </div>
    <div>sadfsafd</div>
    </el-card> -->
  </div>
</template>


<script>
import docomment from "@/components/docomment";
import Vue from "vue";
// import Vue from 'vue';
import VueImg from "v-img";
import { switchCase } from "babel-types";

Vue.use(VueImg);
Vue.filter("myDate", function(time) {
  var date2 = new Date();
  var date1 = new Date(time);

  var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数

  //------------------------------

  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));

  //计算出小时数

  var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数

  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  var oDate = new Date(time);

  var Y = oDate.getFullYear() + "-";
  var M =
    (oDate.getMonth() + 1 < 10
      ? "0" + (oDate.getMonth() + 1)
      : oDate.getMonth() + 1) + "-";
  var D =
    (oDate.getDate() < 10 ? "0" + oDate.getDate() : oDate.getDate()) + " ";
  var h =
    (oDate.getHours() < 10 ? "0" + oDate.getHours() : oDate.getHours()) + ":";
  var m =
    (oDate.getMinutes() < 10 ? "0" + oDate.getMinutes() : oDate.getMinutes()) +
    ":";
  var s =
    oDate.getSeconds() < 10 ? "0" + oDate.getSeconds() : oDate.getSeconds();

  if (days == 0) {
    return "今天  " + h + m + s;
  }

  if (days == 1) {
    return "昨天" + h + m + s;
  }
  if (days != 1 || days != 0) {
    return M + D + h + m + s;
  }

  // if (days == 0) {
  //   return (
  //     "今天" +
  //     oDate.getHours() +
  //     ":" +
  //     oDate.getMinutes() +
  //     ":" +
  //     oDate.getSeconds()
  //   );
  // }
  // if (days == 1) {
  //   return (
  //     "昨天" +
  //     oDate.getHours() +
  //     ":" +
  //     oDate.getMinutes() +
  //     ":" +
  //     oDate.getSeconds()
  //   );
  // }
  // if (days != 1 || days != 0) {
  //   return (
  //     oDate.getMonth() +
  //     "-" +
  //     oDate.getDate() +
  //     "  " +
  //     oDate.getHours() +
  //     ":" +
  //     oDate.getMinutes() +
  //     ":" +
  //     oDate.getSeconds()
  //   );
  // }
});

export default {
  data() {
    return {
      showStar: true,
      commentData: "",
      starE: false,
      friendList: []
    };
  },
  components: {
    docomment,
    VueImg
  },
  props: [
    "messageId",
    "nickName",
    "createTime",
    "avatar",
    "content",
    "starnum",
    "images",
    "commentList",
    "index"
    // "friendList"
  ],
  mounted() {},
  methods: {
    clickphotos(url) {
      alert(url);
    },
    star() {
      this.$emit("sendmsg", this.messageId);
      if (this.starE == false) {
        this.$http
          .post("/api/message/star?tag=1&id=" + this.messageId)
          .then(res => {
            if (res.body.data == true) {
              this.starnum++;
              this.starE = !this.starE;
            }
          });
      } else {
        this.$http
          .post("/api/message/star?tag=2&id=" + this.messageId)
          .then(res => {
            if (res.body.data == true) {
              this.starnum--;
              this.starE = !this.starE;
            }
          });
      }
    },
    handleCommand(command) {
      switch (command) {
        case "share":
          this.$message("分享功能即将上线，敬请期待");
          break;
        case "collect":
          this.$message("收藏功能即将上线，敬请期待");
          break;
        case "neverseeit":
          //屏蔽动态
          this.$emit("delete", this.index);
          // this.$message("您已经屏蔽此动态");
          break;
        case "shield":
          this.$message("click on item " + command);
          //屏蔽用户 ajax
          break;
      }
    },
    updateComment(data) {
      this.commentList.push(data);
    }
  }
};
</script>

<style>
.box-card {
  margin-top: 20px;
}
a {
  color: #000000;
  vertical-align: middle;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:visited {
  color: #000000;
  text-decoration: none;
}
.time {
  font-size: 13px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.7);
}
.star {
  margin-top: 20px;
  border-top: 1px solid #ebeef5;
  font-size: 13px;
  padding-top: 10px;
}

.photo img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.content img {
  width: 100%;
  flex-direction: row;
}

.img_avatar {
  align-content: center;
  align-items: center;
}

.divcontent {
  display: flex;
  flex-direction: row;
  /* flex-direction: column; */
  width: 100%;
  min-height: 80px;
}
.photo {
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.a_img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.username_and_time {
  flex: 8;
  min-height: 80px;
  display: flex;
  margin-left: 15px;
  justify-content: flex-start;
  align-items: center;
}
.b_contant {
  display: flex;
  flex-direction: column;
}
.do_message_action {
  flex: 1;
  /* width: 80px; */
  min-height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  /* background-color: rgb(181, 216, 168); */
}
.content_P {
  margin-left: 10px;
  margin-bottom: 20px;
}
.img_flex {
  float: left;
  /* margin-left: 10px; */
  width: 100%;
}
.img_conten {
  width: 32%;
  height: 34%;
}
.onephoto img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.twophoto img {
  margin-right: 2%;
  width: 48%;
  /* height:100%; */
}
.morephoto img {
  width: 180px;
  margin-left: 3px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.fui-icon {
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  font-size: 0;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
}
.feed-v9,
.icon-op-praise {
  background-image: url(../assets/jpgs.png);
  /* background-position: -458px -260px; */
  background-position: -458px -286px;
}
.icon-op-praise-hidden {
  background-image: url(../assets/jpgs.png);
  /* background-position: -458px -260px; */
  background-position: -458px -260px;
}
.img_2 {
}
.img_one {
  margin: 0 auto;
  /* margin-left: 5%; */
}
.img_two {
}
.img_more {
}
.comment_item {
  margin-top: 10px;
}
.comment_item_content {
  font-size: 14px;
}
.comment_item_content span {
  color: gray;
}
</style>