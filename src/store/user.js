import { defineStore } from "pinia";
import { ref, reactive } from "vue";
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref('')
    const username = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const userInfo = reactive({
      username: '',
      phone: '0911111111',
      email: 'abc@gmail.com',
      address: '淡水區'
    })
    const setUsername = (newUsername) => {
      userInfo.username = newUsername
    }
    const setUserInfo = (newUserInfo) => {
      userInfo.username = newUserInfo.username
      userInfo.phone = newUserInfo.phone
      userInfo.email = newUserInfo.email
      userInfo.address = newUserInfo.address
    }
    return {
      token,
      setToken,
      username,
      setUsername,
      userInfo,
      setUserInfo
    };
  },
  {
    persist: true, //預設存在localStorage
  }
);
