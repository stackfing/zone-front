<template>
  <div class="related">
    <template v-for="item in 40">
      <el-card class="box-card">
        <div class="content">
          中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文
        </div>
      </el-card>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.related {
  width: 100%;
  margin-top: 30px;
}
.box-card {
  margin-bottom: 15px;
}
.content {
  
}
</style>
