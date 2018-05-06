<style>
.box-card {
  margin-top: 20px;
}
a {
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
  flex: 1;
  /* width: 40px; */
  min-height: 80px;
  /* background-color: aquamarine; */
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
  /* width: 40px; */
  min-height: 80px;
  /* background-color: rgb(148, 255, 127); */
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
  background-position: -458px -286px ;
}
.icon-op-praise-hidden {
  background-image: url(../assets/jpgs.png);
  /* background-position: -458px -260px; */
  background-position: -458px -260px ;
}
.img_2{
  
}
.img_one{
  margin-left: 5%;;
}
.img_two{
  margin-left: -2px;
  /* margin:  auto auto; */
}
.img_more{
  margin-left: 25px;
}
</style>

<template>
  <div class="message">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <div class="divcontent">
            <div class="photo">
                <img class="a_img" :src="headPhoto"/>
            </div>
            <div class="username_and_time">
                <div class="b_contant">
                    <span><a href="" class="username">{{nickName}}</a></span>
                    <span class="time">{{createTime|myDate}}</span>
                </div>
            </div>
            <div class="do_message_action">
                <el-button  style="" type="text">操作</el-button>
            </div>
        </div>
    </div>
    <div class="content">
            <p class="content_P">{{content}}</p>
            <template>
              <div class="img_one" v-if="images.length==1">
                  <img v-img="{ title: 'sadfsadfsfd'}" style="width:90%;height:320px;margin-left:10px;" v-for="item in images" :src="item"/>
              </div>
              <div v-else-if="images.length==2">
                <div class="img_two">
                  <img v-img="{ title: 'sadfsadfsfd'}" style="width:270px;height:220px;margin-left:5px;" v-for="item in images" :src="item"/>
                </div>
              </div>
              
              <div v-else>
                <div class="img_more">
                  <img v-img="{ title: 'sadfsadfsfd'}" style="width:160px;height:120px;margin-left:3px;margin-bottom:-1px !important;" v-for="item in images" :src="item"/>
                </div>
              </div>
            </template>
           
            <div  class="clearfix"> </div>
    </div>
    <div class="star" v-show="showStar">
        <span class="el-icon-star-on" style="font-size:15px;color:#409EFF"></span>&nbsp;<span>{{starnum}} 人觉得很赞</span>
        <div style="float:right;display:inline">
          <i class="fui-icon" @click="star" :class="starE?'icon-op-praise':'icon-op-praise-hidden'" style="margin-top:-3px;"></i>
        </div>
        <div class="clearfix"></div>
    </div>
    <template v-for="item in commentList">
      
      <div class="comment_item">
        <div class="comment_item_photo">
            {{item.nickName}}
        </div>
        <div class="comment_item_content">
            {{item.comment}}
        </div>
      </div>
    </template>
    <docomment :friendList="friendList"></docomment>
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
import VueImg from 'v-img';

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
  // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
  var oDate = new Date(time);
 
  if(days == 0) {
    return "今天" + oDate.getHours()+":"+oDate.getMinutes()+":"+oDate.getSeconds();
  } 
  if(days==1) {
    return "昨天" + oDate.getHours()+":"+oDate.getMinutes()+":"+oDate.getSeconds();
  } 
  if(days!=1||days!=0){
    return oDate.getMonth() + "-" + oDate.getDate() + "  " + oDate.getHours()+":"+oDate.getMinutes()+":"+oDate.getSeconds();
  }

});

export default {
  data() {
    return {
      showStar: true,
      commentData: "",
      starE:false
    };
  },
  components: {
    docomment,
    VueImg
  },
  props: [
    "nickName",
    "createTime",
    "headPhoto",
    "content",
    "starnum",
    "images",
    "commentList",
    "friendList"
  ],
  mounted() {
    console.log(this.images)
    console.log(this.friendList)
  },
  methods: {
    clickphotos(url) {
      alert(url);
    },
    star() {
      this.starE = !this.starE;
      if(this.starE == true) {
        this.starnum ++;
      } else {
        this.starnum --;
      }
    }
  }
};
</script>