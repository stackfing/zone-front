<style scoped>
.wrapper {
  position: relative;
}
.hedaer {
  width: 1000px;
  height: 56px;
  margin: 0 auto;
  position: relative;
}
.header_left {
  width: 160px;
  height: 46px;
  position: absolute;
  left: 0px;
  top: 5px;
  /* background-color: aqua; */
  line-height: 40px;
}

.header_left_text {
  font-size: 20px;
  font-weight: 600;
  color: #222;
}
.header_right_ul {
  line-height: 40px;
  color: rgb(105, 94, 94);
}
.header_right_ul li {
  float: left;
  min-width: 70px;
  height: 40px;
  list-style-type: none;
  cursor: pointer;
}
.header_right_ul li:hover {
  color: #999;
}
.header_right {
  width: 300px;
  height: 46px;
  position: absolute;
  right: 10px;
  top: 5px;
  /* background-color: rgb(184, 61, 137); */
}
.desc {
  width: 100%;
  height: 226px;
  background-color: #007bff;
}
.desc_content {
  width: 1000px;
  height: 226px;
  margin: auto auto;
  /* background-color: aqua; */
  position: relative;
}

.right {
  position: absolute;
  top: 200px;
  right: 10px;
  width: 100px;
  height: 100px;
  background-color: burlywood;
}
.text_title {
  position: absolute;
  top: 60px;
  left: 0px;
  font-size: 40px;
  color: rgb(250, 250, 250);
}

.text_title_less {
  position: absolute;
  top: 80px;
  left: 220px;
  font-size: 20px;
  color: rgb(230, 227, 227);
}
.text_desc {
  position: absolute;
  top: 110px;
  left: 0px;
  font-size: 22px;
  color: rgb(238, 236, 236);
}

.content {
  margin: 0 auto;
  width: 1000px;
  min-height: 800px;
  background-color: rgb(245, 245, 245);
}
</style>

<template>
 <div class="wrapper">
     <div class="hedaer">
         <div class="header_left">
             <div class="header_left_text">vue-qrcode</div>
         </div>
         <div class="header_right">
            <ul class="header_right_ul">
                <li title="Docsfnasdkdf ">Docs</li>
                <li title="LicensevLicensev">License</li>
                <li title="GitHubdsafa">GitHub</li>
                <li title="Aboutdfhjasf">About</li>
            </ul>             
         </div>

     </div>
     <div class="desc">
         <div class="desc_content">
             <div class="text_title">vue-qrcode</div>
             <div class="text_title_less">v0.3.0</div>
             <div class="text_desc">Qrcode component for Vue.js</div>
         </div>
     </div>
     <div class="content">
         <div>1</div>
         <div>1</div>
         <div>1</div>
         <div>1</div>
         <div>1</div>
         <div>1</div>
         <div>1</div>
         <div>1</div>
     </div>

 </div>
</template>

<style>

</style>
