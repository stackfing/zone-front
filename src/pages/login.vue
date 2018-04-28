<style>
.inputclass {
  width: 80%;
  transition: all 0.8s;
}

.inputclass:hover {
  width: 100%;
}
@keyframes grows {
  0% {
    margin-left: 10px;
  }
  100% {
    margin-left: 100px;
    opacity: 0;
  }
}

.grow-enter,
.grow-leave {
  width: 800px;
}

.grow-enter-to,
.grow-leave-to {
  width: 1000px;
}

.grow-leave-active {
  transition: all 0.8s;
  /* animation: grows .8s; */
}
.grow-enter-active {
  transition: all 0.8s;
  /* animation: grows .8s reverse; */
}
</style>

<template>
    <div style="padding-top:20px;">
        <el-upload
        action="http://localhost:8888/photos/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <router-view/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isCl: true,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    inputblur() {
      console.log("sdf");
      this.isCl = false;
    },
    inputfocus() {
      console.log("sddsds");
      this.isCl = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  mounted() {
    }
};
</script>
