<style>
.grid_content {
  /* width: 1000px; */
  /* background-image: none; */
  /* min-height: 500px; */
  padding-bottom: 100px;
      width: 592px;
    /* margin: 230px auto; */
    margin: 0 auto;
    padding-top: 200px;
}
.form_box {
  margin-top: 30px;
}
.sendEmail_container {

}
</style>

<template>
<div class="grid_content">
    <el-steps :active="active" finish-status="success">
            <el-step title="填写基本信息"></el-step>
            <el-step title="邮箱验证"></el-step>
            <el-step title="注册成功"></el-step>
    </el-steps>
    <template>
      <div v-if="active == 0">
        <el-form class="form_box">
          <span>请填写您的基本信息</span>
          <el-form-item label="用户名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input type="email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" ></el-input>
          </el-form-item>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </el-form>
      </div>
      <div v-if="active == 1">
        <div class="sendEmail_container">
          
          <el-button style="margin-top:30px;" @click="next">点击进入邮箱</el-button>
        </div>
      </div>
      <div v-if="active == 2">
        <p>您的邮箱已经验证通过</p>
        <el-button style="margin-top:30px;" @click="next">下一步</el-button>
      </div>
      <div v-if="active == 3">
        注册成功
        您的地址是：http://baidu.com
      </div>
    </template>
    
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      nickname: "2"
    };
  },
  // props: ['active'],
  methods: {
    next() {
      if (this.nickname === "") {
      } else {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
};
</script>
