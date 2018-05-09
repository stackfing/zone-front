<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.login-box {
  padding-top: 20%;
  margin-left: 40%;
}
a {
  color: #555;
  text-decoration: none;
}
a:visited {
  color: #555;
  text-decoration: none;
}
</style>

<template>
  <div class="login-box" id="app">
    <el-row>
      <el-col :span="8">
        <el-input id="account" v-model="account" placeholder="请输入帐号" @keyup.native.enter="login">
          <template slot="prepend">帐号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码" @keyup.native.enter="login">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button id="login" @click="login" style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span style="font-size:12px;float:left"><a href="/register">立即注册</a></span>
        <span style="font-size:12px;float:right"><a href="#">忘了密码？</a></span>
        <div class="clearfix"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <center style="margin-top:100px;font-size:13px;color:#999;">腾讯云提供计算服务. 前端由 Vue.js 强力驱动</center>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { BASE_URL } from '@/components/api'
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    login: function(event) {
      //获取值
      var account = this.account;
      var password = this.password;
      if (account == "" || password == "") {
        this.$message({
          message: "账号或密码为空！",
          type: "error"
        });
        return;
      }
      //ajax

      this.$http
        .post({BASE_URL}.BASE_URL + 'api/user/login', {
          account: account,
          password: password
        })
        .then(res => {
          if (res.status == 200) {
            if (res.body.code == 200) {
              localStorage.setItem("token", res.body.data);
              if(this.$route.query.redirect == null) {
                this.$router.replace("/")
              } else {
                this.$router.replace(this.$route.query.redirect);                
              }
            } else {
              this.$message({
                message: res.body.msg,
                type: "error"
              });
            }
          }
        });
    }
  },
  mounted() {
    console.log()
    if (localStorage.getItem("token") != null) {
      this.$router.replace("/trend");
    }
  }
};
</script>
