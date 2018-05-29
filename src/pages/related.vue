<template>
  <div class="related">
    <template v-for="item in 40">
      <el-card class="box-card">
        <div class="title">asdasd</div>
        <div class="content" v-html="test">
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
      test: ''
    };
  },
  mounted() {
    this.test = '<a href="#">asdfsfs</a>'
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
.title {

}
.content {
  
}

>>>a {
  color: #555;
  text-decoration: none;
}
>>>a:visited {
  color: #555;
  text-decoration: none;
}
</style>
