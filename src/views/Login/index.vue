<script setup>
// import GoogleLogo from "@/assets/img/google-logo.svg";
// import FBLogo from "@/assets/img/fb-logo.svg";
</script>
<template>
  <div class="form-container">
    <form action="#">
      <h2>登入/註冊</h2>
      <input type="email" name="email" placeholder="請輸入電子郵件" required />
      <input
        type="password"
        name="password"
        placeholder="請輸入密碼"
        required
      />
      <button type="submit">註冊及登入</button>
      <!-- <div class="other-login">
        <div class="other-login-title">其他登入方式</div>
        <div class="other-login-box">
          <div><img :src="GoogleLogo" alt="Google Icon" /></div>
          <div><img :src="FBLogo" alt="Google Icon" /></div>
        </div>
      </div> -->
    </form>
  </div>
</template>
<style scoped>
/* 表單 */
.form-container form {
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.form-container form input {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
}
.form-container form button {
  background: #3264ff;
  color: #fff;
  border: none;
  width: 50%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

.form-container form .other-login .other-login-title {
  margin: 30px 0;
}
.form-container form .other-login .other-login-box {
  display: flex;
  justify-content: center;
}
.form-container form .other-login .other-login-box div {
  max-width: 100px;
  max-height: 50px;
}
.form-container form .other-login .other-login-box div img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>