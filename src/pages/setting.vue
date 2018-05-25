<template>
  <div class="setting_container">
    <div class="title">
      <p>设置</p>
    </div>
    <div class="hr"></div>
    <div class="setting_body">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="ruleForm.nickname" :disabled="True"></el-input>
        </el-form-item>
        <el-form-item label="个性签名" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="空间开放" prop="region">
          <el-select v-model="ruleForm.zoneopen" placeholder="请选择">
            <el-option label="只对好友开放" value="1"></el-option>
            <el-option label="对所有人开放" value="2"></el-option>
            <el-option label="关闭" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="可见性" prop="region">
          <el-select v-model="ruleForm.findme" placeholder="请选择">
            <el-option label="只允许通过昵称查找" value="1"></el-option>
            <el-option label="只允许通过账号查找" value="2"></el-option>
            <el-option label="关闭" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      True:true,
      ruleForm: {
        nickname: "stackfing",
        email: "stackfing@gmail.com",
        sex: "男",
        zoneopen: "1",
        findme: "2",
      },
      rules: {
        nickname: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        desc: [{ required: false, message: "请填写个性签名", trigger: "blur" }],
        email: [{ required: true, message: "请填写邮箱地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.setting_container {
  /* width: 100%;
    border: 1px solid #ebeef5;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 7px;
    padding: 30px; */
  width: 100%;
  height: 600px;
  /* margin-top: 50px; */
  -webkit-box-shadow: 0px 0px 20px rgb(214, 214, 214);
  box-shadow: 0px 0px 20px rgb(214, 214, 214);
  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 7px;
  border: 0px solid #eee;
}
.hr {
  width: 90%;
  height: 2px;
  margin: 0 auto;
  background-color: #efefef;
}
.title {
  text-align: center;
  margin-bottom: 10px;
}
.setting_body {
  margin-top: 50px;
}
</style>