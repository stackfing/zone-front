<template>
  <div class="message">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <div class="divcontent">
            <div class="photo">
                <img class="a_img" :src="photoUrl"/>
            </div>
            <div class="username_and_time">
                <div class="b_contant">
                    <span><a href="" class="username">{{username}}</a></span>
                    <span class="time">{{createTime}}</span>
                </div>
            </div>
            <div class="do_message_action">
                <el-button  style="" type="text">操作</el-button>
            </div>
        </div>
    </div>
    <div class="content">
            <p class="content_P">你好看</p>
            <div class="img_flex">
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                <img  class="img_conten"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
            </div>
            <div  class="clearfix"> </div>
    </div>
    
    <div class="star" v-show="showStar">
        <span class="el-icon-star-on" style="font-size:15px;color:#409EFF"></span>&nbsp;<span> <a href="">李四</a>、<a href="">张氏</a> 等觉得很赞</span>
    </div>
    <div class="comment">
        <el-input v-model="input" placeholder="评论"></el-input>
    </div>
    </el-card>

    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span><a href="" class="username">1用户名</a></span>
        <br> width="50" height="50"
        <span class="time">13:20</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
    </div>
    <div>sadfsafd</div>
    </el-card>
    <!-- <div :class="" v-if="img.length=1"></div>
   <div class=""  v-if="9>img.length>=1"></div>
    <div class="" v-if="img.length"=9> </div> -->

    <!-- img=[a:44,b:444,c:545] -->
    <div @click=""></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showStar: true
    };
  },
  props: ['username','id','createTime','photoUrl','content','starUser']
};
</script>

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
}
.star {
  margin-top: 20px;
  border-top: 1px solid #ebeef5;
  font-size: 13px;
  padding-top: 10px;
}
.photo {
}
.photo img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.comment {
    margin-top: 13px;
    border-top: 1px solid #ebeef5;
}
.content img {
  flex-direction: row;
}

.img_avatar{
    align-content: center;
    align-items: center;
}

.divcontent{
    display: flex;
    flex-direction: row;
    /* flex-direction: column; */
    width: 100%;
    min-height: 80px;
}
.photo{
    flex: 2;
    /* width: 40px; */
     min-height: 80px;
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.a_img{
    width: 50px;
    height: 50px;
    border-radius: 25px;;
}
.username_and_time{
    flex: 8;
    /* width: 40px; */
     min-height: 80px;
    /* background-color: rgb(148, 255, 127); */
    display: flex;
    
    justify-content: flex-start;
    align-items: center;
}
.b_contant{
    display: flex;
    flex-direction: column;
}
.do_message_action{
    flex: 2;
    /* width: 80px; */
     min-height: 80px;
     display: flex;
     justify-content: flex-end;
     align-items: flex-start;
    /* background-color: rgb(181, 216, 168); */
}
.content_P{
    margin-left: 10px;
}
.img_flex{
    float: left;
    margin-left: 10px;
}

.img_conten{
    width: 32%;
    height: 34%;
}
</style>