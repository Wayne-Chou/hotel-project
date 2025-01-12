<script setup>
import { ref, reactive } from "vue";
import { useUserStore } from '@/store/user.js'

// 編輯邏輯,一開使為false點選後變true
// 透過點選來將input的開關顯示跟隱藏
const editMode = ref(false);
const toggleEditMode = () => {
  editMode.value = !editMode.value;
};
const userStore = useUserStore()
const profile = reactive({
  username: userStore.userInfo.username,
  phone: userStore.userInfo.phone,
  email: userStore.userInfo.email,
  address: userStore.userInfo.address
})
const save = () => {
  userStore.setUserInfo(profile)
  editMode.value = false
}
</script>

<template>
  <div class="profile-page">
    <div class="profile-sidebar">
      <div class="user-info">
        <h2 class="user-name">使用者名稱</h2>
      </div>
      <div class="profile-menu">
        <label for="tab-personal-info" class="menu-item">個人資料</label>
        <label for="tab-favorites" class="menu-item">我的最愛</label>
      </div>
    </div>
    <input
      type="radio"
      id="tab-personal-info"
      name="profile-tab"
      class="profile-tab"
      checked
    />
    <input
      type="radio"
      id="tab-favorites"
      name="profile-tab"
      class="profile-tab"
    />
    <div class="profile-content">
      <div class="section" id="section-personal-info">
        <div class="section-personal-edit">
          <h2>個人資料</h2>

          <button v-show="editMode" @click="save" class="edit-button">
            儲存
          </button>
          <button v-show="!editMode" @click="toggleEditMode" class="edit-button">
            編輯
          </button>
        </div>
        <!-- v-if="!editMode"一開始為false不顯示
         點選後變成true,透過雙向綁定進行編輯 
         -->
        <div class="user-details">
          <p>
            <strong>姓名：</strong>
            <span v-if="!editMode">{{ profile.username }}</span>
            <input
              v-if="editMode"
              v-model="profile.username"
              class="edit-input"
              type="text"
            />
          </p>
          <p>
            <strong>電話：</strong>
            <span v-if="!editMode">{{ profile.phone }}</span>
            <input
              v-if="editMode"
              v-model="profile.phone"
              class="edit-input"
              type="text"
            />
          </p>
          <p>
            <strong>Email：</strong>
            <span v-if="!editMode">{{ profile.email }}</span>
            <input
              v-if="editMode"
              v-model="profile.email"
              class="edit-input"
              type="email"
            />
          </p>
          <p>
            <strong>地址：</strong>
            <span v-if="!editMode">{{ profile.address }}</span>
            <input
              v-if="editMode"
              v-model="profile.address"
              class="edit-input"
              type="text"
            />
          </p>
        </div>
      </div>
      <div class="section" id="section-favorites">
        <h2>我的最愛</h2>
        <p>這是我的最愛的內容。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  display: flex;
  gap: 20px;
  min-height: 400px;
  padding: 30px 0;
}
.profile-tab {
  display: none;
}
.profile-sidebar {
  width: 250px;
  background: #f4f4f4;
  padding: 20px;
}

.profile-sidebar .user-info {
  text-align: center;
}

.profile-sidebar .profile-menu .menu-item {
  display: block;
  padding: 10px 15px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 10px;
}

.profile-sidebar .profile-menu .menu-item:hover {
  background: #1668e3;
  color: white;
}

.profile-content {
  flex-grow: 1;
  padding: 20px;
  border: 1px solid #dfe0e4;
  border-radius: 10px;
}

.profile-content .section {
  display: none;
}

#tab-personal-info:checked ~ .profile-content #section-personal-info {
  display: block;
}

#tab-favorites:checked ~ .profile-content #section-favorites {
  display: block;
}
.profile-content .section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.profile-content .section-header h2 {
  margin: 0;
  font-size: 24px;
}

.profile-content .user-details p {
  margin: 10px 0;
  font-size: 16px;
}

.profile-content .user-details strong {
  color: #007bff;
}

.section-personal-edit {
  display: flex;
  justify-content: space-between;
}
.edit-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.edit-button:hover {
  background-color: #0056b3;
}
/* has用法 瀏覽器主流有支援使用須看支援程度*/

.profile-page:has(#tab-personal-info:checked) label[for="tab-personal-info"],
.profile-page:has(#tab-favorites:checked) label[for="tab-favorites"] {
  background: #1668e3;
  color: white;
}
</style>