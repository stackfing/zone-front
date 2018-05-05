<style scoped>
/* .container {
}
.header {
    background-color: red;
    width: 100%;
    height: 3rem;
}
.body {
    display: flex;
    flex-direction: row;
}
.slide {
    display: flex;
    
    justify-content: center;
    background-color: rgb(148, 142, 142);
    height: 5rem;
}
.a{ 
    background-color: aqua;
    flex: 1;
}
.b{ 
    background-color: rgb(134, 226, 111);
    flex: 2;
}
.c{ 
    background-color: rgb(231, 117, 231);
    flex: 1;
}
.slide_left{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}
.slide_left_a{
   background-color: rgb(67, 202, 33);
    flex: 1;  
}
.slide_left_b{
   background-color: rgb(83, 81, 194);
    flex: 1;  
} */
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

<template>
 
  <div class="container">
      <div class="header">
          
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
   <!-- <div class="container">
      <div class="header">

      </div>
      <div class="body">
          <div class="slide a">
              <div class="slide_left">
                  <div class="slide_left_a">
                      4444
                  </div>
                  <div class="slide_left_b">
                      454
                  </div>
              </div>
          </div>
          <div class="slide b">421124</div>
          <div class="slide c">4121124</div>
      </div>
  </div> -->
</template>

<script>
export default {
  data() {
      return {

      }
  }
}
</script>
