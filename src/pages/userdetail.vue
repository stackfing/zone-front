<template>
  <div class="container">
    <div style="height:247px;position:relative">
      <img style="width:100%;height:247px;" src="../assets/userdetail.jpg" />
      <div class="avatar_img">
        <img style="width:100px;height:100px;" :src="detailInfo.avatar" />
      </div>
    </div>
    <div class="bodys">
      <template v-if="mydata.length == 0">
        <center>
          <span style="color: gray;font-size:0.5rem">暂时没有动态</span>
        </center>
        <div class="hr"></div>
      </template>
      <template v-else>
        <template v-for="item of mydata" class="messagecontainer">
          <message style="margin-top: 20px" :messageId=item.id :createTime=item.createTime :avatar=item.avatar :content=item.content :nickName=item.nickName :images=item.images :starnum=item.starnum :commentList=item.commentList />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/components/api";
import message from "@/components/message";
// import { BASE_URL } from '@/components/api'
export default {
  data() {
    return {
      nickname: "",
      mydata: [],
      detailInfo: {},
      nowPage: 1,
      nowMessageSize: 10,
    };
  },
  components: {
    message
  },
  created() {
    this.$http
      .get("/api/message/detail/" + this.$route.params.nickname)
      .then(res => {
        this.mydata = res.data.data.messages;
        this.detailInfo = res.data.data.detailInfo;
        document.title = this.detailInfo.nickName + "的资料 - Zone";
      })
      .catch(res => {});
    // this.nickname = this.$route.params.nickname;
  },
  mounted() {
    // this.$http
    //   .get("/api/user/detail/" + this.$route.params.nickname)
    //   .then(res => {
    //     console.log(res.body.data);
    //     this.mydata = res.body.data;
    //   });
  }
};
</script>

<style scoped>
.container {
  background: rgb(248, 248, 248);
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.avatar_img {
  position: absolute;
  bottom: -30px;
  left: 20px;
  background-color: rgb(255, 255, 255);
  width: 100px;
  height: 100px;
  border-radius: 2px;
  border: #fff 3px solid;
}
.bodys {
  margin-top: 50px;
}
.hr {
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>