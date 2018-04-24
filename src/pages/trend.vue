<template>
    <el-row :gutter="20">
        <side-bar/>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <p>写下当前的心情吧{{test}}</p>
            </div>
            <div>
                    <el-input
                        @focus="inputfocus"
                        @blur="inputblur"
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="message">
                    </el-input>
                    <transition name="fade">
                        <el-button style="float:right" v-show="submitshow" @click="submitmessage">提交</el-button>
                    </transition>
                </div>
                <message testmessage="123"/>
        </el-col>
    </el-row>
</template>

<script>
import sideBar from "@/components/sideBar";
import message from "@/components/message"
export default {
  data() {
    return {
      test: "test",
      message: "",
      submitshow: false
    };
  },
  components: {
    sideBar,message
  },
  methods: {
    inputfocus() {
      this.test = "已经点击";
      this.submitshow = true;
      console.log("焦点进入input");
    },
    inputblur() {
      if (this.message === "") {
        this.test = "没有输入内容";
        this.submitshow = false;
      }
    },
    submitmessage() {
      if (this.message === "") {
        this.submitshow = true;
        return false;
      } else {
        // 这里添加提交代码
        console.log("提交内容是： " + this.message);
      }
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
