<style>
.comment {
  margin-top: 15px;
  /* border-top: 1px solid #ebeef5; */
  display: flex;
  flex-direction: row;
}
.comment_left {
  min-width: 85%;
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
  min-width: 80px;
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
<template>
  <div class="comment">
    <div class="comment_left" :class="{'comment_left_active':!animate_false}">
      <el-input class="commentInput" @focus="inputfocus" @blur="inputblur" v-model="commentData" placeholder="评论"></el-input>
    </div>
    <div class="comment_right">
      <transition name="fade">
        <el-button type="primary" v-show="animate_false" plain>评论</el-button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentData: "",
      animate_false: false
    };
  },
  props: ["messageId"],
  methods: {
    inputfocus() {
      this.animate_false = true;
    },
    inputblur() {
      if (this.commentData === "" || this.commentData == null) {
        this.animate_false = false;
      } else {
        //提交评论
        this.$http
          .post("/api/comment/" + this.messageId + "/send", {
            id: this.messageId,
            comment: this.commentData
          })
          .then(res => {
            this.$emit('updateComment', res.data.data)
            if (res.data.data == true) {
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
