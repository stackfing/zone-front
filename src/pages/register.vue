<style>

</style>

<template>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="grid-content bg-purple">
                    <el-steps :active="active" finish-status="success">
                            <el-step title="填写基本信息"></el-step>
                            <el-step title="邮箱验证"></el-step>
                            <el-step title="注册成功"></el-step>
                    </el-steps>
                    <template>
                      <div v-if="active == 0">
                        填写信息
                        <input>
                      </div>
                      <div v-if="active == 2">
                        我们已经发送邮件给您
                      </div>
                      <div v-if="active == 3">
                        注册成功
                        您的地址是：http://baidu.com
                      </div>
                    </template>
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                </div>
            </el-col>
        </el-row>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  // props: ['active'],
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
