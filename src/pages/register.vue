<style scoped>
.container {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  flex-direction: column;
}
.header {
  display: flex;
  height: 60px;
  width: 100%;
  background: #409eff;
  z-index: 1000;
}
.logo {
  line-height: 60px;
  font-size: 1.2em;
  position: relative;
  left: 35px;
}
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.form_container {
  display: flex;
  padding-top: 30px;
  /* justify-content: center; */
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background: #f4f4f4;
}
.tips {
  height: 250px;
  width: 1000px;
  margin: 0 auto;
}

.tips h1 {
  margin: 0 auto;
  text-align: center;
  color: #acacac;
}

.process_tip {
  padding: 10px;
  margin-bottom: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .tips {
    display: none;
  }
  .el-form {
    margin-top: 0px;
  }
  .form {
    width: 300px;
  }
}
</style>
<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <span @click="toHome">ZONE</span>
      </div>
    </div>
    <div class="body">
      <div class="tips">
        <div class="process_tip">
          <h1>完成注册需要 3 个步骤</h1>
        </div>
        <el-steps :active="2" align-center>
          <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
      <div class="form_container">
        <el-form class="form" ref="form" label-width="80px">
          <el-form-item label="账号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group>
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="开放性" prop="region">
            <el-select placeholder="请选择">
              <el-option label="只对好友开放" value="1"></el-option>
              <el-option label="对所有人开放" value="2"></el-option>
              <el-option label="关闭" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="可见性" prop="region">
            <el-select placeholder="请选择">
              <el-option label="只允许通过昵称查找" value="1"></el-option>
              <el-option label="只允许通过账号查找" value="2"></el-option>
              <el-option label="关闭" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { BASE_URL } from "@/components/api";
export default {
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>