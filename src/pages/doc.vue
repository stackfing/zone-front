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
  font-size: 30px;
  font-weight: 600;
  color: #222;
  cursor: pointer;
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
  text-align: center;
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
  cursor: default;
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
  /* color: rgb(250, 250, 250); */
  color: white;
}

.text_title_less {
  position: absolute;
  top: 80px;
  left: 100px;
  font-size: 20px;
  /* color: rgb(230, 227, 227); */
  color: white;
}

.text_desc {
  position: absolute;
  top: 110px;
  left: 0px;
  font-size: 22px;
  /* color: rgb(238, 236, 236); */
  color: white;
}

.content {
  margin: 0 auto;
  width: 1000px;
  /* min-height: 800px; */
  /* background-color: rgb(245, 245, 245); */
  line-height: 2;
}

a {
  text-decoration: none;
  background-color: transparent;
  color: #999;
  display: block;
}

a:hover {
  color: rgb(105, 94, 94);
}

.hr {
  margin-top: 5px;
  width: 100%;
  height: 1px;
  background-color: rgb(201, 198, 198);
}

code {
  background-color: #f8f8f8;
}

p {
  font-size: 1.3rem;
  cursor: default;
}

.footer {
  margin-top: 100px;
}
</style>

<template>
  <div class="wrapper">
    <div class="hedaer">
      <div class="header_left">
        <div class="header_left_text">ZONE</div>
      </div>
      <div class="header_right">
        <ul class="header_right_ul">
          <li title="Docs ">
            <a href="#">Docs</a>
          </li>
          <li title="WTFPL">
            <a href="#license">License</a>
          </li>
          <li title="GitHub">
            <a href="http://github.com/imfing">GitHub</a>
          </li>
          <li title="About">
            <a href="http://www.stackfing.com/about">About</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="desc">
      <div class="desc_content">
        <div class="text_title">Zone</div>
        <div class="text_title_less">v 0.0.1 [preview]</div>
        <div class="text_desc">moments of Vue.js and Spring Boot.</div>
      </div>
    </div>
    <div class="content">
      <h1>What is?</h1>
      <div class="hr"></div>
      <p>Just a toy program, lmitate QZone. You can use it to find more interesting people or use it to share your current mood and moments.
      </p>
      <p>Zone is developing, welcome to contribute! Github/Gitea address see below.</p>
      <h1>Getting Started</h1>
      <div class="hr"></div>
      <h2>server</h2>
      <code>$ git clone root@118.89.41.65:stackfing/zone.git</code>
      <p>Import SQL files to MySQL and import project to IntelliJ IDEA and just run.</p>
      <h2>front</h2>
      <code>$ git clone root@118.89.41.65:stackfing/zone-front.git</code>
      <p>Check your current work directory is zone-front.</p>
      <p>Install dependencies</p>
      <code>
        $ npm install
      </code>
      <p>Just run it</p>
      <code>
        $ npm run dev
      </code>
      <p>Open browser and perss :
        <a href="http://localhost:8080">http://localhost:8080</a>
      </p>
      <p>Enjoy it!</p>
      <h1>Contribution</h1>
      <div class="hr"></div>
      <p>Gitea:</p>
      <p>front
        <a href="http://118.89.41.65:3000/stackfing/zone-front">http://118.89.41.65:3000/stackfing/zone-front</a>
      </p>
      <p>server
        <a href="http://118.89.41.65:3000/stackfing/zone">http://118.89.41.65:3000/stackfing/zone</a>
      </p>
      <p>Github not yet open</p>
      <h1 name="license">License</h1>
      <div class="hr"></div>
      WTFPL
      <br>
      <pre><span lang="en" title="English language text">                   Version 2, December 2004

Copyright (C) 2004 Sam Hocevar &lt;sam@hocevar.net&gt;

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.</span>
</pre>
    </div>

    <div class="footer">

    </div>
  </div>
</template>

<style>

</style>
