<style>
.container {
  min-width: 1000px;
  margin: 0 auto;
}
.slide_container {
  width: 250px;
  height: 300px;
  /* border: solid 1px red; */
}
.action_list {
  list-style: none;
}
.action_list li {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.action_list li:hover {
  background-color: rgba(196, 191, 191, 0.3);
  cursor: pointer;
}
.sp_friend_trend {
  width: 16px;
  height: 16px;
  background-image: url(../assets/jpgs.png);
  background-position: -588px -182px;
  display: none !important;
}
.action_list_selected {
  background-color: rgba(196, 191, 191, 0.9);
}
.left_slide_container {
  margin-right: 30px;
  background-color: rgba(223, 223, 223, 0.6);
}
.center_container {
  display: flex;
  justify-content: center;
  width: 592px;
}
.body_container {
  display: flex;
  min-height: 800px;
  padding-bottom: 100px;
  color: #2c3e50;
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  background-color: #e9e9e9;
  padding-top: 300px;
  display: flex;
  justify-content: center;
  min-width: 1160px;
}
.right_slide_container {
  margin-left: 30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.router-link-active {
    background-color: #7e7e7e86
}
</style>

<template>
<div class="container">
    <div class="header">

    </div>
    <div class="body">
        <div class="body_container">
            <div class="left_slide_container slide_container">
                <ul class="action_list">
                    <!-- <li @click="toggleSlide('trend')" class="action_list_selected"><i class="sp_friend_trend"></i><span>朋友动态</span></li>
                    <li @click="toggleSlide('linkme')" class="">与我相关</li>
                    <li @click="toggleSlide('find')">发现世界</li>
                    <li @click="toggleSlide('setting')">系统设置</li>
                    <li @click="toggleSlide('register')">关于我</li>
                    <li @click="toggleSlide('link')">友情链接</li> -->
                    <router-link tag="li" to="/trend" replace>朋友动态</router-link>
                    <router-link tag="li" to="/setting" replace>与我相关</router-link>
                    <router-link tag="li" to="/find" replace>发现世界</router-link>
                    <router-link tag="li" to="/settings" replace>系统设置</router-link>
                    <router-link tag="li" to="/about" replace>关于我</router-link>
                    <router-link tag="li" to="/link" replace>友情链接</router-link>
                </ul>
            </div>
            <div class="center_container">
                <!-- <transition name="fade">
                    <component :is="comp" keep-alive></component>
                </transition> -->
                <router-view></router-view>
            </div>
            <div class="right_slide_container slide_container">
                sdfdsf
            </div>
        </div>
    </div>
    <div class="footer">

    </div>
</div>  
</template>

<script>
import trend from "@/pages/trend"
import setting from "@/pages/setting"
import register from "@/pages/register"
export default {
  data() {
    return {
      comp: "trend"
    };
  },
  components: {
    trend,
    setting,
    register
  },
  methods: {
    toggleSlide(item) {
      
    }
  }
};
</script>
