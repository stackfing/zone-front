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
</style>

<template>
  <div class="login-box" id="app" >
 <el-row>  
    <el-col :span="8">  
        <el-input id="account"  v-model="account" placeholder="请输入帐号" @keyup.native.enter="login">  
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
        <el-button id="login" @click="login" style="width:100%" type="primary" >登录</el-button>  
    </el-col>
 </el-row>
 <el-row>
    <el-col :span="8">
        <span style="font-size:12px;float:right">忘了密码？</span>
        <div class="clearfix"></div>
     </el-col>
 </el-row>
 <el-row>
   <el-col :span="8">
     <center style="font-size:13px;color:#999;">腾讯云提供计算. Vue.js 强力驱动</center>
   </el-col>
 </el-row>
</div>
</template>

<script>
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
        .post("http://10.102.174.142:8888/api/user/login", {
          account: account,
          password: password
        })
        .then(res => {
          if (res.status == 200) {
            if (res.body.code == 200) {
              localStorage.setItem("jwt", res.body.data);

              this.$router.replace("/");
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
    if (localStorage.getItem("jwt") != null) {
      this.$router.replace("/trend");
    }
  }
};
</script>
