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
.pop-restaurant div {
  text-decoration: none;
  color: #000;
  border: 1px solid #dfe0e4;
  border-radius: 10px;
}
.pop-restaurant div span {
  padding: 10px;
  display: inline-block;
}
.pop-restaurant div img {
  width: 400px;
  height: 400px;
  border-radius: 10px 10px 0 0;
  vertical-align: middle;
}
</style>