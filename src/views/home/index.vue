<script setup>
import { ref } from "vue";

const favres = ref([
  { id: "1", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
  { id: "2", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
  { id: "3", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
  { id: "4", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
  { id: "5", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
  { id: "6", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
  { id: "7", imgSrc: "https://fakeimg.pl/230x300/", name: "度假村" },
]);

const pop = ref([
  { id: "1", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
  { id: "2", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
  { id: "3", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
  { id: "4", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
  { id: "5", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
  { id: "6", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
  { id: "7", imgSrc: "https://fakeimg.pl/300/", name: "度假村" },
]);
</script>

<template>
  <h3>探索你最愛的住宿</h3>
  <div class="fav-restaurant">
    <div v-for="item in favres" :key="item.id">
      <img :src="item.imgSrc" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
  <h3>探索熱門趨勢地點的住宿</h3>
  <div class="pop-restaurant">
    <div v-for="item in pop" :key="item.id">
      <img :src="item.imgSrc" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin: 20px 0;
}
.fav-restaurant {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}
.fav-restaurant div {
  text-decoration: none;
  color: #000;
  position: relative;
}
.fav-restaurant div img {
  border-radius: 10px;
}

.fav-restaurant div span {
  display: inline-block;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 5;
}
.pop-restaurant {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}
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
  border-radius: 10px 10px 0 0;
  vertical-align: middle;
}
</style>
