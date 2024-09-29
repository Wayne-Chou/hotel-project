<script setup>
import router from "@/router";

import axios from "axios";
import { useI18n } from "vue-i18n";
import { userApi } from "@/api/module/user";
import { reactive, ref, onMounted } from "vue";
import { message } from "ant-design-vue";
import { setToken, getToken } from "@/utils/localStorage";

const { t } = useI18n();
const token = ref(getToken() || "");
const formData = reactive({
  username: "",
  password: "",
});

const login = async (e) => {
  e.preventDefault();
  if (!formData.username || !formData.password) {
    message.error("請輸入正確資訊");
    return;
  }
  try {
    const { token } = await userApi.login(formData.username, formData.password);

    // localStorage.setItem("R-TONKEN", token);
    setToken(token);
    message.success("登入成功");
    router.push("/");
  } catch (err) {
    console.error("login error", err);
    message.error("登入失敗");
  }
};
onMounted(() => {
  if (token.value) {
    router.push("/");
  }
});
</script>
<template>
  <div class="form-container">
    <form @submit="login">
      <h2>登入/註冊</h2>
      <input
        v-model="formData.username"
        name="username"
        :placeholder="t('username_placeholder')"
      />
      <input
        v-model="formData.password"
        type="password"
        name="password"
        :placeholder="t('username_password')"
      />
      <button>{{ t("login") }}</button>
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