<template>
    <el-row>
        <side-bar/>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <center><p>写下你现在的心情吧-----{{test}}</p></center>
            </div>
            <div class="divtext">
                    <el-input
                        @focus="inputfocus"
                        @blur="inputblur"
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="message">
                    </el-input>
                    <transition name="fade">
                        
                    </transition>
                    <transition name="el-zoom-in-top">
                      <div v-show="submitshow" class="transition-box">
                        <el-button style="float:right;margin-top:10px" v-show="submitshow" @click="submitmessage">提交</el-button>
                      </div>
                      <!-- <el-button style="float:right;margin-top:10px" v-show="submitshow" @click="submitmessage">提交</el-button> -->
                    </transition>
                    <div class="clearfix"></div>
            </div>
                <!-- <message username="admin"
                id="1"
                createTime="10:22"
                photoUrl="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"
                content='
                <p>你真好看</p>
                    <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                    <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"/>
                '
                /> -->
                <div v-for="item of datas">
                  <message :id=item.username
                  :createTime=item.createTime
                  :photoUrl=item.photoUrl
                  :content=item.contente
                  :username=item.username
                  :images=item.images
                  />
                </div>
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
      submitshow: false,
      datas:
        [
          {
            username: 'adin',
            id: '1',
            createTime: '10:22',
            photoUrl: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
            content: '1232131',
            images: [
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',


              // 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',

              // 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',

              // 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg'
            ]
          },
          {
            username: 'adin',
            id: '1',
            createTime: '0:22',
            photoUrl: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg',
            content: '1232131',
            images: [
              'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg'
              // 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"',
              // 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"',
              // 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5aaf6d85a8014c080d3620f76b12696d/d4628535e5dde7112364a3daa6efce1b9d16616c.jpg"'
            ]
          }
        ]
      
    };
  },
  components: {
    sideBar,message
  },
  methods: {
    inputfocus() {
      this.test = "焦点进入ipnut";
      this.submitshow = true;
      console.log("焦点进入input");
    },
    inputblur() {
      if (this.message === "") {
        this.test = "没有输入内容";
        this.submitshow = false;
        return;
      }
      this.test = "焦点进入ipnut";
    },
    submitmessage() {
      if (this.message === "") {
        this.submitshow = true;
        console.log('请输入内容')
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

/* .divtext{
    min-height: 50px;
} */
.clearfix:after{
    content:"";
    height:0;
    line-height:0;
    display:block;
    visibility:hidden;
    clear:both;
}
</style>
