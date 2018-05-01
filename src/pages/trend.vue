<style scope="scope">
.trend_body {
  /* background-color: aqua; */
  min-height: 1200px;
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
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #e2e8ee;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
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
  /* background-color: rgba(0, 0, 0, 0.1) */
  background-color: white;
}
.transition_left {
  width: 800px;
  padding-bottom: 20px;
  padding-left: 30px;
  /* background-color: cadetblue; */
}
.transition_right {
  width: 200px;
  float: left;
  /* background-color: bisque; */
  position: relative;
}
.box {
  width: 592px;
  /* margin:230px auto; */
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
.box_center {
  justify-content: center;
  display: flex;
}
.box_left {
  background-color: rgba(223, 223, 223, 0.6)
}
.box_right {

}
.slide_container {
  width: 250px;
  height: 300px;
  /* border: #2c3e50 solid 1px; */
}
.action_list {
  list-style: none;
  /* padding: 5px 0; */
}
.action_list li {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.action_list li:hover {
  background-color: rgba(196, 191, 191, 0.3);
  cursor: pointer;
  /* background-color: #C2E8FF; */
}
.sp_friend_trend {
    width: 16px;
    height: 16px;
    background-image: url(../assets/jpgs.png);
    background-position: -588px -182px;
    display: none!important;
}
.action_list_selected {
  background-color: rgba(196, 191, 191, 0.9);
}
</style>


<template>
<div class="trend_body">
  <!-- <side-bar/> -->
  <!-- <el-col :span="12"> -->
  <div class="box_left slide_container" style="margin-right:30px;">
    <ul class="action_list">
      <li><i class="sp_friend_trend"></i><span>朋友动态</span></li>
      <li class="action_list_selected"><router-link to="/">与我相关</router-link></li>
      <li>发现世界</li>
      <li>基本设置</li>
      <li>关于我</li>
      <li>友情链接</li>
    </ul>
  </div>
  <div class="clearfix"></div>
  <div class="box_center">
    <div class="box">
      <div class="grid-content bg-purple">
          <center><span>写下你现在的心情吧</span></center>
      </div>
      <div class="divtext">
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
      </div>

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
  <div class="box_right">
    <div class="friend_container slide_container" style="margin-left:30px;">
      
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
      friendList: []
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
      .get("http://localhost:8888/api/message/get")
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

