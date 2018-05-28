<template>
  <div class="trend">
    <div class="clearfix"></div>
    <div class="send_message_box">

      <div class="grid-content bg-purple">
        <center>
          <span style="line-height:36px">写下你现在的心情吧</span>
        </center>
      </div>

      <at-ta :members="$store.state.friendInfo" name-key="nickname">
        <template slot="item" slot-scope="s">
          <img class="small_img" width="27" height="27" :src="s.item.avatar">
          <span style="margin-left:5px;" v-text="s.item.nickname"></span>
        </template>
        <textarea @change="handleAtChange" v-model="message" @focus="clickTextArea" placeholder="写下你现在的心情吧" class="el-textarea__inner" contenteditable></textarea>
      </at-ta>
      <transition name="el-zoom-in-top">
        <div v-show="submitshow" class="transition-box">
          <div class="transition_left">
            <upload @getURL="getPhotoUrl"></upload>
          </div>
          <div class="transition_right">
            <el-button class="btn_upload" v-show="submitshow" @click="submitmessage">提交</el-button>
          </div>
        </div>
      </transition>

      <div class="clearfix"></div>
      <ul style="margin-top:20px">
        <li v-for="(item, index) of mydata" ref="list" style="transition: all .4s;list-style:none;margin-bottom:20px">
          <message :key="index" :index="index" @delete="deleteMessageContainer" :messageId=item.id :createTime=item.createTime :avatar=item.avatar :content=item.content :nickName=item.nickName :images=item.images :starnum=item.starnum :commentList=item.commentList :friendList=friendList />
        </li>
      </ul>
      <div class="bottom_tip" onselectstart="return false" @click="cases == true ? getMessages(++nowPage, nowMessageSize) : false">{{more}}</div>
    </div>
  </div>
</template>

<script>
import message from "@/components/message";
import upload from "@/components/upload";
import AtTa from "vue-at/dist/vue-at-textarea";
import { BASE_URL } from "@/components/api";
export default {
  data() {
    return {
      members: [],
      message: "",
      submitshow: false,
      mydata: [],
      friendList: [],
      dass: "message",
      photos: [],
      more: "点击加载更多",
      nowPage: 1,
      nowMessageSize: 10,
      cases: true,
      atList: []
    };
  },
  components: {
    message,
    AtTa,
    upload
  },
  methods: {
    handleAtChange(data) {
      console.log(data)
      console.log(data.srcElement.value)
    },
    submitmessage() {
      if (this.message === "") {
        this.submitshow = true;
        this.$message({
          message: "请输入内容",
          type: "warning"
        });
        return false;
      } else {
        this.submitshow = false;
        // 这里添加提交代码
        console.log("提交内容是： " + this.message);
        console.log();
        this.sendMessage();
      }
    },
    clickTextArea() {
      // console.log("sdd");
      this.submitshow = true;
    },
    getPhotoUrl(...e) {
      this.photos = e;
    },
    sendMessage() {
      this.$http
        .post({ BASE_URL }.BASE_URL + "api/message/sendMessage", {
          content: this.message,
          photos: this.photos
        })
        .then(res => {
          console.log(res.data.data);
          this.mydata.unshift(res.data.data);
          this.cleanForm();
          if (res.data.state == 200) {
            this.$message({
              message: "发表成功",
              type: "success"
            });
          }
        });
    },
    cleanForm() {
      this.photos = "";
      this.message = "";
    },
    deleteMessageContainer(data) {
      // const childNodes = this.$refs.list;
      // const el = childNodes[data];
      // const offsetHeight = window
      //   .getComputedStyle(el)
      //   .getPropertyValue("height");
      // const marginBottom = window
      //   .getComputedStyle(el)
      //   .getPropertyValue("margin-bottom");
      // const totalHeight = parseInt(offsetHeight) + parseInt(marginBottom);
      // const matrix = this.getTransformMatrix(el);
      // el.style.transform = `translate(100%, ${
      //   matrix[1] ? Number(matrix[1]) : 0
      // }px)`;
      // el.style.opacity = "0";
      // setTimeout(() => {
      //   // this.mydata.splice(data, 1);
      //   for (let i = data + 1; i < childNodes.length; i++) {
      //     if (childNodes[i].style.transform) {
      //       const matrix = this.getTransformMatrix(childNodes[i]);
      //       childNodes[i].style.transform = `translate(0, ${Number(matrix[1]) -
      //         totalHeight}px)`;
      //     } else {
      //       childNodes[i].style.transform = `translate(0, -${totalHeight}px)`;
      //     }
      //   }
      // }, 500);
      this.mydata.splice(data, 1);
    },
    getTransformMatrix(el) {
      if (!el) return false;
      return el.style.transform.replace(/[^0-9\-.,]/g, "").split(",");
    },
    getMessages(page, size) {
      this.more = "数据拼命加载中...";
      this.$http
        .get("/api/message?page=" + page + "&size=" + size)
        .then(res => {
          // console.log(res.data.data);
          if (res.data.data == false) {
            this.cases = false;
          } else {
            for (var i = 0; i < res.data.data.length; i++) {
              this.mydata.push(res.data.data[i]);
            }
          }
        });
    },
    textblur() {
      this.submitshow = false;
    }
  },
  created() {
    if (this.$store.state.userInfo != null) {
      this.$http
        .get(
          { BASE_URL }.BASE_URL +
            "/api/message?page=" +
            this.nowPage +
            "&size=" +
            this.nowMessageSize
        )
        .then(res => {
          this.mydata = res.data.data;
        })
        .catch(res => {});

      var _this = this;
      window.addEventListener("scroll", function() {
        if (
          document.documentElement.clientHeight +
            document.documentElement.scrollTop >=
          document.body.scrollHeight
        ) {
          //分页
          if (_this.cases == true) {
            _this.getMessages(++_this.nowPage, _this.nowMessageSize);
          } else {
            _this.more = "没有更多啦！";
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.trend {
  width: 100%;
}
.list-leave-active {
  transition: all 0.8s;
  transform: translate3d(0, 0, 0);
}

.list-move {
  transition: transform 1;
}

.list-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #87ceff;
}
.row-bg {
  padding: 10px 0;
}

.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

.bottom_tip {
  line-height: 13px;
  padding-bottom: 15px;
  cursor: pointer;
  width: 150px;
  margin: 0 auto;
  font-size: 13px;
  color: #b2b2b2;
  text-align: center;
}

.transition-box {
  background-color: white;
  position: relative;
}
.transition_left {
  padding-bottom: 20px;
  padding-left: 30px;
}
.transition_right {
  background-color: #87ceff;
}
.send_message_box {
  margin: 0 auto;
}
.btn_upload {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.small_img {
  width: 27px;
  height: 27px;
}
</style>