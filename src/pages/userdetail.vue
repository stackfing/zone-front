<template>
  <div class="container">
    <div style="height:247px;position:relative">
      <img @click="changeImg" style="width:100%;height:247px;" src="../assets/userdetail.jpg" />
      <div class="avatar_img">
        <img style="width:100px;height:100px;" :src="detailInfo.avatar" />
      </div>
      <div class="nickname">
        <span>{{detailInfo.nickName}}</span>
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
      <el-dialog title="请上传背景图" :visible.sync="dialog" width="100%">
        <upload @getURL="getPhotoUrl"></upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="uploadBackgroundImage">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/components/api";
import message from "@/components/message";
import upload from "@/components/upload"
// import { BASE_URL } from '@/components/api'
export default {
  data() {
    return {
      nickname: "",
      mydata: [],
      detailInfo: {},
      nowPage: 1,
      nowMessageSize: 10,
      dialog: false
    };
  },
  components: {
    message,
    upload
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
  },
  mounted() {
  },
  methods: {
    changeImg() {
      this.dialog = true;
    },
    getPhotoUrl(...e) {
      console.log(e)
    },
    uploadBackgroundImage() {
      this.dialog = false;
    }
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
  bottom: -40px;
  right: 15px;
  background-color: rgb(255, 255, 255);
  width: 100px;
  height: 100px;
  border-radius: 2px;
  border: #fff 3px solid;
}
.nickname {
  position: absolute;
  bottom: 15px;
  right: 135px;
  color: white;
  font-weight: bold;
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