<style scoped>

</style>

<template>
  <div class="container">
    <div class="" v-for="item in datas">
      <message 
      :createTime=item.createTime 
      :headPhoto=item.headphoto 
      :content=item.content 
      :nickName=item.nickName 
      :images=item.images 
      :starnum=item.starnum 
      :commentList=item.commentList 
      />
    </div>
  </div>
</template>

<script>
import message from "@/components/message";
import { BASE_URL } from '@/components/api'
export default {
  data() {
    return {
      nickname: "",
      datas: {}
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
        {BASE_URL}.BASE_URL + "api/user/detail/" + this.$route.params.nickname
      )
      .then(res => {
        console.log(res.body.data);
        this.datas = res.body.data;
      });
  }
};
</script>
