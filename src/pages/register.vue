<style>

</style>

<template>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="grid-content bg-purple">
                    <el-steps :active="active" finish-status="success">
                            <el-step title="填写手机号码"></el-step>
                            <el-step title="填写注册信息"></el-step>
                            <el-step title="注册成功"></el-step>
                    </el-steps>
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                </div>
            </el-col>
        </el-row>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['active'],
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
