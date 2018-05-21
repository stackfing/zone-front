<template>
  <div class="container">
    <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526568051728&di=366eebc77658020cb72a29bf511ac00b&imgtype=0&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F44%2F44-418743.jpg"/> -->
    <div style="height:247px;position:relative">
      <img src="../assets/userdetail.jpg" />
      <div class="avatar_img">
        <img style="width:100px;height:100px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526534584432&di=cdf8cc286ce2068a9d35efc317be62b5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180508%2Fdbd23d6048a6425bbc520ff1eeec321b.jpeg"/>
      </div>
    </div>
    <div class="bodys">
      <template v-for="item of mydata">
        <message :messageId=item.id :createTime=item.createTime :avatar=item.avatar :content=item.content :nickName=item.nickName :images=item.images :starnum=item.starnum :commentList=item.commentList />
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
      mydata: []
    };
  },
  components: {
    message
  },
  created() {
    
    document.title = this.$route.params.nickname + '的资料 - Zone'
    this.$http
      .get("/api/message/detail/" + this.$route.params.nickname)
      .then(res => {
        this.mydata = res.body.data;
      })
      .catch(res => {});
    this.nickname = this.$route.params.nickname;
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
  background-color: gray;
  width: 100px;
  height: 100px;
  border-radius: 2px;
  border: #fff 3px solid;
}
.bodys {
  margin-top: 50px;
}
</style>