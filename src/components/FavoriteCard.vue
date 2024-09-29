<template>
  <div @click="handleClick">
    <img :src="imgSrc" alt="" />
    <span>{{ name }}</span>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  id: {
    type: Number,
  },
  imgSrc: {
    type: String,
  },
  number: {
    type: String,
  },
  name: {
    type: String,
  },
});
const emit = defineEmits(["cardClick"]);

const handleClick = () => {
  emit("cardClick");
};
</script>
<style scoped>
.fav-restaurant div {
  text-decoration: none;
  color: #000;
  position: relative;
}
.fav-restaurant div img {
  border-radius: 10px;
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.fav-restaurant div span {
  display: inline-block;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 5;
  color: #fff;
}
</style>