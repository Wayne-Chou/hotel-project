<script setup>
import { useRouter } from "vue-router";
import Logo from "@/assets/img/logo.png";
import { useI18n } from "vue-i18n";
import { setLanguage } from "@/utils/localStorage";
import { useUserStore } from '@/store/user.js'
import { computed } from "vue";

const userStore = useUserStore()
const token = computed(() => userStore.token);
const username = computed(() => userStore.userInfo.username)
const router = useRouter();
const changePage = (url) => {
  console.log(url);
  router.push(url);
};
// 翻譯
const { t, locale } = useI18n();
console.log(locale.value);
const changeLanguage = () => {
  const newLanguage = locale.value === "zh_TW" ? "en_US" : "zh_TW";
  locale.value = newLanguage;
  setLanguage(newLanguage);
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="header-logo">
        <img :src="Logo" alt="" />
      </div>
      <!-- <div class="check-box">
        <div class="input-box">
          <div class="input">
            <input
              type="text"
              value=""
              :placeholder="t('location_placeholder')"
            />
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
      </div> -->

      <div class="LoginRegister">
        <div class="LoginRegister-box">
          <div class="language-icon" @click="changeLanguage">
            <i class="fa-solid fa-globe"></i>
          </div>
          <div v-if="!token" class="user-icon" @click="changePage('/login')">
            <i class="fa-solid fa-user"></i>
          </div>
          <div v-else class="user-icon" @click="changePage('/account')">
            <i class="fa-solid fa-user"></i>
          </div>
          <p v-if="token">Hi, {{ username }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 0.75rem rgba(12, 14, 28, 0.08);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.header .header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  align-items: center;
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

.header .check-box {
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>
