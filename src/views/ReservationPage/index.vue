<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, ref, reactive } from "vue";

import { useHouseStore } from "@/store/house";

const route = useRoute();
const router = useRouter();
const houseStore = useHouseStore();
const routeId = ref(Number(route.params.id));
const search = ref(route.query.search);
const id = ref(Number(route.query.id));

const database = computed(() =>
  search.value === "favorite" ? houseStore.favorite : houseStore.location
);

const reservationRoom = computed(() => {
  const house = database.value.find((item) => item.id === id.value)
  return house.reservation.find(item => item.id === routeId.value);
});

const formData = reactive({
  userInfo: {
    name: '',
    email: '',
    phone: ''
  },
  paymentInfo: {
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cvv: ''
  }
})
const submit = () => {
  console.log(formData);
}
</script>

<template>
  <!-- 預訂頁面 -->

  <section id="guest-info">
    <h2>基本資料</h2>
    <form>
      <fieldset>
        <legend>您的資訊</legend>
        <label for="guest-name">姓名：</label>
        <input
          type="text"
          v-model="formData.userInfo.name"
          id="guest-name"
          name="guest_name"
          placeholder="請輸入您的姓名"
          required
        />

        <label for="guest-email">電子郵件：</label>
        <input
          type="email"
          v-model="formData.userInfo.email"
          id="guest-email"
          name="guest_email"
          placeholder="請輸入您的電子郵件"
          required
        />

        <label for="guest-phone">聯絡電話：</label>
        <input
          type="tel"
          v-model="formData.userInfo.phone"
          id="guest-phone"
          name="guest_phone"
          placeholder="請輸入您的聯絡電話"
          required
        />
      </fieldset>
    </form>
  </section>

  <!-- 房型內容 -->
  <section id="room-details">
    <h2>房型內容</h2>
    <article>
      <h3>房型</h3>
      <p>{{ reservationRoom.type }}</p>
    </article>
    <article>
      <h3>每晚價格</h3>
      <p>新台幣 {{ reservationRoom.price }} 元</p>
    </article>
    <article>
      <h3>房間設施</h3>
      <ul>
        <li v-for="item in reservationRoom.service" :key="item">{{ item }}</li>
      </ul>
    </article>
  </section>

  <!-- 信用卡卡號填寫 -->
  <section id="payment-info">
    <h2>付款資訊</h2>
    <form @submit.prevent="submit">
      <fieldset>
        <legend>信用卡資訊</legend>
        <label for="credit-card">信用卡卡號：</label>
        <input
          type="text"
          v-model="formData.paymentInfo.cardNumber"
          id="credit-card"
          name="credit_card"
          placeholder="請輸入信用卡卡號"
          maxlength="16"
          required
        />

        <label for="expiration-month">有效月份：</label>
        <input
          type="text"
          v-model="formData.paymentInfo.cardMonth"
          id="expiration-month"
          name="expiration_month"
          placeholder="MM"
          maxlength="2"
          required
        />

        <label for="expiration-year">有效年份：</label>
        <input
          type="text"
          v-model="formData.paymentInfo.cardYear"
          id="expiration-year"
          name="expiration_year"
          placeholder="YYYY"
          maxlength="4"
          required
        />

        <label for="cvv">信用卡安全碼 (CVV)：</label>
        <input
          type="text"
          v-model="formData.paymentInfo.cvv"
          id="cvv"
          name="cvv"
          placeholder="三位數安全碼"
          maxlength="3"
          required
        />
      </fieldset>
      <button>提交預訂</button>
    </form>
  </section>
</template>

<style scoped>
header {
  text-align: center;
  padding: 20px 0;
  background-color: #007bff;
  color: #fff;
}

header h1 {
  font-size: 2rem;
}

h2 {
  margin-bottom: 10px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  color: #007bff;
}

fieldset {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

legend {
  font-weight: bold;
  color: #555;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
button {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: #0056b3;
}

/* 房型內容 */
#room-details article {
  background-color: #f1f1f1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

#room-details ul {
  list-style: square;
  padding-left: 20px;
}

input::placeholder {
  color: #aaa;
}
</style>