<template>
  <div class="comment">
    <div class="comment_left" :class="isfocus? 'isfocus' : ''">
      <el-input class="commentInput" @focus="isfocus = true" v-model="commentData" placeholder="评论"></el-input>
    </div>
    <div class="comment_right">
      <el-button type="primary" @click="inputblur" v-show="isfocus" plain>评论</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentData: "",
      isfocus: false
    };
  },
  props: ["messageId"],
  methods: {
    inputfocus() {
      this.isfocus = true;
    },
    inputblur() {
      if (this.commentData === "" || this.commentData == null) {
        // this.animate_false = false;
      } else {
        //提交评论
        this.$http
          .post("/api/comment/" + this.messageId + "/send", {
            id: this.messageId,
            comment: this.commentData
          })
          .then(res => {
            this.$emit("updateComment", res.data.data);
            if (res.data.data != undefined || res.data.data != null) {
              this.commentData = "";
              this.$message({
                message: "评论成功",
                type: "success"
              });
            }
          });
          
      }
    }
  }
};
</script>
<style>
.comment {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}
.isfocus {
  min-width: 80%!important;
}
.comment_left {
  min-width: 100%;
  /* min-width: 85%; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  /* background-color: aquamarine; */
  transition: all 0.3s;
}
.comment_left_active {
  min-width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  /* background-color: aquamarine; */
}
.comment_right {
  min-width: 15%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(209, 87, 193); */
  margin-left: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>