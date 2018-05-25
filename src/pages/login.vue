<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <span> ZONE </span>
      </div>
    </div>
    <div class="out_form">
    <div class="form">
      <center> 目前提供测试账号:1 密码:1 </center>
      <el-input style="margin-bottom:20px;" id="account" v-model="account" placeholder="请输入帐号" @keyup.native.enter="login">
        <template slot="prepend">帐号</template>
      </el-input>
      <el-input style="margin-bottom:20px;" id="password" v-model="password" type="password" placeholder="请输入密码" @keyup.native.enter="login">
        <template slot="prepend">密码</template>
      </el-input>
      <el-button id="login" @click="login" style="width:100%;margin-bottom:20px;" type="primary">登录</el-button>
      <div class="reg">
        <span style="font-size:12px" class="register">
          <a href="/register">立即注册</a>
        </span>
        <span style="font-size:12px" class="forget">
          <a href="/">忘了密码？</a>
        </span>
        <div class="clearfix"></div>
      </div>
      <div class="copyright">
        <center style="margin-top:100px;font-size:13px;color:#999;">腾讯云提供计算服务. Vue.js 强力驱动</center>
      </div>
    </div>
    </div>


  </div>
</template>

<script>
import { BASE_URL } from "@/components/api";
export default {
  data() {
    return {
      account: "1",
      password: "1"
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
        .post({ BASE_URL }.BASE_URL + "/api/user/login", {
          account: account,
          password: password
        })
        .then(res => {
          if (res.status == 200) {
            if (res.data.code == 200) {
              localStorage.setItem("token", res.data.data);
              if (this.$route.query.redirect == null) {
                this.$router.replace("/");
              } else {
                this.$router.replace(this.$route.query.redirect);
              }
            } else {
              this.$message({
                message: res.data.msg,
                type: "error"
              });
            }
          }
        });
    }
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      //如果有token，但是失效或者错误信息，需要与后台比对。
      this.$http
        .post("/api/user/checkToken?token=" + localStorage.getItem("token"))
        .then(res => {
          if (res.data.data == true) {
            this.$router.replace("/trend");
          } else {
            this.$message({
              message: "您的信息已经过期，请重新登录",
              type: "error"
            });
          }
        });
    }
  }
};
</script>

<style scoped>



.logo {
  line-height: 60px;
  font-size: 1.2em;
  position: relative;
  left: 60px;
}
.header {
  position: fixed;
  display: flex;
  height: 60px;
  width: 100%;
  top: 0px;
  background: #409eff;
  z-index: 1000;
}


.out_form{
  /* position: fixed; */
  /* left: 10%; */
  /* top: 10%; */
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 100vh; 
  z-index: 0;
  /* background-color: #409eff; */
}

.login {
  display: flex;
  flex: 1;
  width: 100%;
  /* height: 100vh; */
  /* height: 100%; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.reg {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
}
.register {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.forget {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
/* .login-box {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  display: flex;
  flex-direction: column;
} */
a {
  color: #555;
  text-decoration: none;
}
a:visited {
  color: #555;
  text-decoration: none;
}
</style>