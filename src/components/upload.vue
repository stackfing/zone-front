<style>
</style>

<template>
  <div style="padding-top:20px;">
    <el-upload :headers="headers" action='/api/photos/upload' list-type="picture-card" :on-preview="handlePictureCardPreview" @click="imgClick" :on-success="successMethod" :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <router-view/>
  </div>
</template>

<script>
import { BASE_URL } from "@/components/api";
export default {
  data() {
    return {
      isCl: true,
      dialogImageUrl: "",
      dialogVisible: false,
      headers: {
        token: localStorage.getItem('token')
      }
    };
  },
  methods: {
    inputblur() {
      this.isCl = false;
    },
    inputfocus() {
      this.isCl = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      this.$emit("getURL", file.url);
    },
    imgClick() {
      this.$emit("getURL", this.dialogImageUrl);
    },
    successMethod(response, file, fileList) {
      console.log("文件上次成功" + response.data);
      this.$emit("getURL", response.data);
    }
  },
  mounted() {}
};
</script>
