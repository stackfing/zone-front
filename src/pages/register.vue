<style scoped>
.grid_content {
  padding-bottom: 100px;
  width: 592px;
  margin: 0 auto;
  padding-top: 100px;
}
.form_box {
  margin-top: 50px;
  box-shadow: 0px 0px 30px rgb(214, 214, 214);
  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 7px;
  border: 1px solid #eee;
}
</style>

<template>
  <div class="grid_content">
    <el-steps :active="active" finish-status="success">
      <el-step title="填写基本信息"></el-step>
      <el-step title="邮箱验证"></el-step>
      <el-step title="注册成功"></el-step>
    </el-steps>
    <div v-if="active == 0">
      <el-form class="form_box" :model="form">
        <span>请填写您的基本信息</span>
        <el-form-item label="用户名">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password"></el-input>
        </el-form-item>
        <el-button style="float:right" @click="next">下一步</el-button>
        <div class="clearfix"></div>
      </el-form>
    </div>
    <div v-if="active == 1">
      <div class="sendEmail_container">
        <p style="margin-top:30px;">我们已经发送邮件在您的邮箱，请进入邮箱点击链接以激活您的账号。</p>
        <el-button style="margin-top:30px;" @click="toEmail">点击进入邮箱</el-button>
      </div>
    </div>
    <div v-if="active == 2">
      <p style="margin-top:30px;">您的邮箱已经验证通过</p>
      <el-button style="margin-top:30px;float:right" @click="next">下一步</el-button>
    </div>
    <div v-if="active == 3">
      <p style="margin-top:30px;">注册成功，后台正在紧张的为您生成初始化数据，生成完毕即将跳转至首页</p>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/components/api";
export default {
  data() {
    return {
      active: 0,
      nickname: "2",
      username: "",
      form: {}
    };
  },
  // props: ['active'],
  methods: {
    next() {
      if (this.active == 0) {
        this.register();
        return;
      }
      if (this.nickname === "") {
      } else {
        if (this.active++ > 2) this.active = 0;
      }
      if (this.username) {
      }
    },
    toEmail() {
      open("http://mail.qq.com");
    },
    register() {
      this.$http
        .post({ BASE_URL }.BASE_URL + "api/user/register", this.form)
        .then(res => {
          if (res.body.data == true) {
            this.active++;
          }
        });
    }
  },
  created() {
    var mid = this.$route.query.mid;
    if (mid != null || mid != undefined) {
      this.$http
        .get({ BASE_URL }.BASE_URL + "api/user/register?id=" + mid)
        .then(res => {
          // console.log(res.body.data == false)
          if (res.body.data == true) {
            console.log("没有验证");
            this.active = 2;
            // this.active = 2;
          } else {
            console.log("已经验证过");
            this.active = 3;
          }
        });
    }
  }
};
</script>
