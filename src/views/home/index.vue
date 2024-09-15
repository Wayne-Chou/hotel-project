<script setup>
import { ref } from "vue";
import axios from "axios";
import FavoriteCard from "@/components/FavoriteCard.vue";
import PopularCard from "@/components/PopularCard.vue";

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
    <favorite-card
      v-for="item in favres"
      :key="item.id"
      :id="item.id"
      :img-src="item.imgSrc"
      :name="item.name"
    />
  </div>
  <h3>探索熱門趨勢地點的住宿</h3>
  <div class="pop-restaurant">
    <popular-card
      v-for="item in pop"
      :key="item.id"
      :id="item.id"
      :img-src="item.imgSrc"
      :name="item.name"
    />
  </div>
</template>

<style scoped>
.fav-restaurant {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}
.pop-restaurant {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}
</style>
