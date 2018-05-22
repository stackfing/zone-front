<template>
  <div class="">
    <div class="clearfix"></div>
    <div>
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
          <textarea v-model="message" @click="clickTextArea" class="el-textarea__inner" contenteditable></textarea>
        </at-ta>

        <transition name="el-zoom-in-top">
          <div v-show="submitshow" class="transition-box">
            <div class="transition_left">
              <upload @getURL="getPhotoUrl"></upload>
            </div>
            <div class="transition_right">
              <el-button class="btn_upload" style="" v-show="submitshow" @click="submitmessage">提交</el-button>
            </div>
          </div>
        </transition>

        <div class="clearfix"></div>
        <ul style="margin-top:20px">
          <li v-for="(item, index) of mydata" ref="list" style="transition: all .4s;list-style:none;margin-bottom:20px">
            <message :key="index" :index="index" @delete="deleteMessageContainer" @sendmsg="shows" :messageId=item.id :createTime=item.createTime :avatar=item.avatar :content=item.content :nickName=item.nickName :images=item.images :starnum=item.starnum :commentList=item.commentList :friendList=friendList />
          </li>
        </ul>
        </ul>
      </div>
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
      photos: []
    };
  },
  components: {
    message,
    AtTa,
    upload
  },
  methods: {
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
    shows(data) {
      // this.$http
      //   .post("/api/message/star?tag=1&id=" + data)
      //   .then(res => {
      //     if (res.body.data == true) {
      //       // this.starnum++;
      //       // this.starE = !this.starE;
      //     }
      //   });
    },
    deleteMessageContainer(data) {
      const childNodes = this.$refs.list;
      const el = childNodes[data];
      const offsetHeight = window
        .getComputedStyle(el)
        .getPropertyValue("height");
      const marginBottom = window
        .getComputedStyle(el)
        .getPropertyValue("margin-bottom");
      const totalHeight = parseInt(offsetHeight) + parseInt(marginBottom);
      const matrix = this.getTransformMatrix(el);
      el.style.transform = `translate(100%, ${
        matrix[1] ? Number(matrix[1]) : 0
      }px)`;
      el.style.opacity = "0";
      setTimeout(() => {
        for (let i = data + 1; i < childNodes.length; i++) {
          if (childNodes[i].style.transform) {
            const matrix = this.getTransformMatrix(childNodes[i]);
            childNodes[i].style.transform = `translate(0, ${Number(matrix[1]) -
              totalHeight}px)`;
          } else {
            childNodes[i].style.transform = `translate(0, -${totalHeight}px)`;
          }
        }
      }, 500);
      // this.mydata.splice(data, 1);
    },
    getTransformMatrix(el) {
      if (!el) return false;
      return el.style.transform.replace(/[^0-9\-.,]/g, "").split(",");
    }
  },
  created() {
    if (this.$store.state.userInfo != null) {
      this.$http
        .get({ BASE_URL }.BASE_URL + "/api/message")
        .then(res => {
          this.mydata = res.data.data;
        })
        .catch(res => {});
      this.$http
        .get({ BASE_URL }.BASE_URL + "/api/user/friendList")
        .then(res => {
          if (res.ok == true) {
            // this.members = res.body.data;
            // console.log(res.body.data)
          }
        })
        .catch(res => {});
    }
  }
};
</script>

<style scoped>
/* .list-item {
  display: inline-block;
  margin-right: 10px;
} */

.list-leave-active {
  /* transition: all 0.5s; */
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
  /* background-color: #e2e8ee; */
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

.transition-box {
  display: flex;
  background-color: white;
}
.transition_left {
  width: 800px;
  padding-bottom: 20px;
  padding-left: 30px;
}
.transition_right {
  width: 200px;
  float: left;
  position: relative;
}
.send_message_box {
  width: 592px;
  /* width: 100%; */
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