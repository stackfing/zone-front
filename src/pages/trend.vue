<style scope="scope">

.grid-content {
  border-radius: 4px;
  min-height: 36px;
      background-color: #e2e8ee;
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


<template>
<div class="">
  <div class="clearfix"></div>
  <!-- <component :is="dass" keep-alive></component> -->
  <div>
    <div class="send_message_box">
      <div class="grid-content bg-purple">
          <center><span>写下你现在的心情吧</span></center>
      </div>
      
        <!-- <el-input
                  @focus="inputfocus"
                  @blur="inputblur"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="message">
              </el-input> -->
        <at :members="members" name-key="name" >
          <template slot="item" slot-scope="s">
            <img class="small_img" width="27" height="27" :src="s.item.avatar">
            <span v-text="s.item.name"></span>
          </template>

          <div style="height:50px"
              @click="testToast"
              class="el-textarea__inner"
              contenteditable>{{message}}
          </div>
        </at>
              
        <transition name="el-zoom-in-top">
          <div v-show="submitshow" class="transition-box">
            <div class="transition_left">
                <upload @getURL="loginURL"></upload>
            </div>
            <div class="transition_right">
                <el-button class="btn_upload" style="" v-show="submitshow" @click="submitmessage">提交</el-button>
            </div>
          </div>
        </transition>
        <div class="clearfix"></div>

      <div v-for="item of mydata">
        <message
        :createTime=item.createTime
        :headPhoto=item.headphoto
        :content=item.content
        :nickName=item.nickName
        :images=item.images
        :starnum=item.starnum
        :commentList=item.commentList
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sideBar from "@/components/sideBar";
import message from "@/components/message";
import upload from "@/components/upload";
import At from "vue-at";
export default {
  data() {
    return {
      members: [],
      message: "",
      submitshow: false,
      mydata: [],
      friendList: [],
      dass: 'message'
    };
  },
  components: {
    sideBar,
    message,
    At,
    upload
  },
  methods: {
    inputfocus() {
      this.test = "焦点进入ipnut";
      this.submitshow = true;
      console.log("焦点进入input");
    },
    inputblur() {
      if (this.message === "") {
        this.test = "没有输入内容";
        this.submitshow = false;
        return;
      }
      this.test = "焦点进入ipnut";
    },
    submitmessage() {
      console.log("请输入内容请输入内容请输入内容请输入内容请输入内容");

      if (this.message === "") {
        this.submitshow = true;
        console.log("请输入内容");
        return false;
      } else {
        this.submitshow = false;
        // 这里添加提交代码
        console.log("提交内容是： " + this.message);
        console.log();
      }
    },
    testToast() {
      // console.log("sdd");
      this.submitshow = true;
    },
    loginURL(...e) {
      console.log("loginURL --- " + e);
    }
  },
  created() {
    this.$http
      .get("http://localhost:8888/message")
      .then(res => {
        this.mydata = res.body.data;
        console.log(this.mydata);
      })
      .catch(res => {});
    this.$http
      .get("http://localhost:8888/user/firendList")
      .then(res => {
        this.members = res.body.data;
        console.log(this.members);
      })
      .catch(res => {});
  }
};
</script>

