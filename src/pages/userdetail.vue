<style scoped>

</style>

<template>
  <div class="container">
    <div v-for="item of mydata">
          <message :messageId=item.id :createTime=item.createTime :avatar=item.avatar :content=item.content :nickName=item.nickName :images=item.images :starnum=item.starnum :commentList=item.commentList />
        </div>
  </div>
</template>

<script>
import message from "@/components/message";
// import { BASE_URL } from '@/components/api'
export default {
  data() {
    return {
      nickname: "",
      mydata: {}
    };
  },
  components: {
    message
  },
  created() {
    this.nickname = this.$route.params.nickname;
  },
  mounted() {
    this.$http
      .get(
        "/api/user/detail/" + this.$route.params.nickname
      )
      .then(res => {
        console.log(res.body.data);
        this.mydata = res.body.data;
      });
  }
};
</script>
