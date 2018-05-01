<style>
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
        <el-input id="account"  v-model="account" placeholder="请输入帐号">  
            <template slot="prepend">帐号</template>  
        </el-input>   
    </el-col>  
 </el-row>  
 <el-row>  
    <el-col :span="8">  
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">  
            <template slot="prepend">密码</template>  
        </el-input>  
    </el-col>  
 </el-row>  
 <el-row>  
    <el-col :span="8">  
        <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>  
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
    check: function(event) {
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
        .post("http://localhost:8888/user/login", {
          account: account,
          password: password
        })
        .then(res => {
          if (res.status == 200) {
            if (res.body.code == 200) {
              localStorage.setItem("jwts", res.body.data);
              this.$router.push('/')
            } else {
              this.$message({
                message: res.body.msg,
                type: "error"
              });
            }
          }
        })
        // .catch(
        //   this.$message({
        //     message: "网络错误，请稍后再试",
        //     type: "error"
        //   }))
        ;

      // if(account === 'a' && password === 'a') {
      //     localStorage.setItem("jwts", "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6IuW8oOS4iSIsImlkIjoxLCJleHAiOjE1MjUxOTU1MjUsImlhdCI6MTUyNTE0MTUyNX0.HFKHQluhUg-jsolSAyn8eU1402Hk_EVN7tn1y22XDQs");
      //     this.$router.push('/')
      // }
    }
  }
};
</script>
