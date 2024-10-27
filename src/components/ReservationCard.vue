<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
    default: "",
  },
  type: {
    type: String,
  },
  bed: {
    type: String,
  },
  theme: {
    type: String,
  },
  size: {
    type: Number,
  },
  service: {
    type: Array,
    default: () => [],
  },
  price: {
    type: Number,
  },
});

const emit = defineEmits(["reservation"]);
const btnClick = () => {
  emit("reservation");
};
</script>

<template>
  <div class="Room-item">
    <div class="Room-img">
      <img :src="image" alt="" />
    </div>
    <div class="Room-Introduction">
      <div class="Room-title">
        {{ title }}, {{ type }}, {{ bed }}, {{ theme }}
      </div>
      <div class="Room-lists">
        <div class="Room-list">{{ size }} 平方公尺</div>
        <div v-for="item in service" :key="item" class="Room-list">
          {{ item }}
        </div>
      </div>
      <div class="Room-price">NT${{ price }}</div>
      <div class="Hotel-Reserve-btn" @click="btnClick">預定</div>
    </div>
  </div>
</template>
<style scoped>
.Room-item {
  border: 1px solid #dfe0e4;
}

.Room-item .Room-Introduction {
  padding: 10px;
}

.Room-item .Room-img {
  max-width: 450px;

  max-height: 230px;
  width: 100%;
  height: 100%;
}

.Room-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Room-item .Hotel-Reserve-btn {
  background: #1668e3;
  text-align: center;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}

.Room-item .Hotel-Reserve-btn:hover {
  background: #0e3672;
}
</style>