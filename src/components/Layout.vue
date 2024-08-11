<script setup>
import { useRouter } from "vue-router";
import Logo from "@/assets/img/logo.png";

const router = useRouter();
const changePage = (url) => {
  router.push(url);
};
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="header-logo">
        <img :src="Logo" alt="" />
      </div>
      <div class="check-box">
        <div class="input-box">
          <div class="input">
            <input type="text" value="" placeholder="您想要去哪裡?" />
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="input">
            <input type="text" value="" />
            <i class="fa-solid fa-calendar"></i>
          </div>
          <div class="input">
            <input type="text" value="" />
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </div>

      <div class="LoginRegister">
        <div class="LoginRegister-box">
          <div class="language-icon"><i class="fa-solid fa-globe"></i></div>
          <div class="user-icon" @click="changePage('/login')">
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <slot></slot>
    </div>

    <footer class="footer">
      <div>
        <h3>熱門目的地</h3>
        <a href="">台北飯店</a>
        <a href="">高雄飯店</a>
        <a href="">礁溪飯店</a>
      </div>
      <div>
        <h3>支援和常見問題</h3>
        <a href="">您的預訂</a>
        <a href="">常見問題</a>
        <a href="">聯絡我們</a>
      </div>
      <div>
        <h3>其他資訊</h3>
        <a href="">關於我們</a>
        <a href="">工作機會</a>
        <a href="">旅遊指南</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
/* header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}

.header .header-logo {
  max-width: 80px;
  width: 100%;
}
.header .header-logo img {
  width: 100%;
}

.header .check-box .input-box {
  display: flex;
  gap: 10px;
}
.header .check-box .input-box .input {
  max-width: 200px;
  height: 30px;
  width: 100%;
  position: relative;
}
.header .check-box .input-box .input input {
  width: 100%;
  height: 100%;
}
.header .check-box .input-box .input input::placeholder {
  padding-left: 20px;
}
.header .check-box .input-box .input input:focus {
  padding-left: 20px;
}
.header .check-box .input-box .input i {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}
.header .LoginRegister .LoginRegister-box {
  display: flex;
  gap: 20px;
}
.header .LoginRegister .LoginRegister-box .language-icon i {
  cursor: pointer;
  font-size: 25px;
}

.header .LoginRegister .LoginRegister-box .user-icon i {
  cursor: pointer;
  font-size: 25px;
}
/* footer */
.footer {
  max-width: 1280px;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.footer div a {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #1668e3;
}
.footer div a:hover {
  text-decoration: underline;
}
/* container */
.container {
  flex: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
</style>
