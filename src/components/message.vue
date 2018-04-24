<template>
  <div class="message">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
        <div style="width:100%">
            <div class="photo" style="float:left;margin-right:30px">
            <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg" />
        </div>
            <span><a href="" class="username">用户名</a></span>
            <br>
           <span class="time">13:20</span>
        </div>
    </div>
    <div>

            <!-- 这里添加内容 -->
            <p>你好看</p>
    <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>

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
        <span><a href="" class="username">用户名</a></span>
        <br>
        <span class="time">13:20</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
    </div>
    <div>sadfsafd</div>
    </el-card>
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
</style>
