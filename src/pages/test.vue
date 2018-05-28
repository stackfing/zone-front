<template>

    <div class="container">
        <div class="header">
            {{message}}
        </div>
        <div class="body">
            <div class="left">
                sdf
            </div>
            <div class="center">
                sdf
            </div>
            <div class="right">
                sfd
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        names: '',
        message: 0
    };
  },
  methods: {
      websocket () {
         let ws = new WebSocket('ws://10.102.191.83:8888/websocket/' + localStorage.getItem('token'))
         ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
              ws.send('Holle')
            //   console.log('数据发送中...')
          }
          ws.onmessage = evt => {
              console.log(evt.data)
              var obj = JSON.parse(evt.data)
              console.log(obj.fun)
          }
          ws.onclose = function () {
            // 关闭 websocket
            // console.log('连接已关闭...')
          }
           // 组件销毁时调用，中断websocket链接
          this.over = () => {
            ws.close()
          }
    },
  },
  created() {
      this.websocket();
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: red;
  height: 3rem;
}
.body {
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
}
.left {
  display: flex;
  flex: 1;
  background-color: aqua;
}
.center {
  display: flex;
  flex: 1;
  background-color: rgb(101, 243, 58);
}
.right {
  display: flex;
  flex: 1;
  background-color: rgb(218, 174, 31);
}
</style>