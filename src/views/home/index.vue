<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import axios from "axios";
import FavoriteCard from "@/components/FavoriteCard.vue";
import PopularCard from "@/components/PopularCard.vue";
import PromotionArea from "@/components/PromotionArea.vue";
import { useHouseStore } from "@/store/house";
import { useRouter } from "vue-router";

const router = useRouter();
const changePage = (url) => {
  router.push(url);
};

const houseStore = useHouseStore();
const favorite = computed(() => houseStore.favorite);
const location = computed(() => houseStore.location);
</script>

<template>
  <h3>探索你最愛的住宿</h3>
  <div class="fav-restaurant">
    <favorite-card
      @click="changePage(`/rooms/${item.theme}?search=favorite`)"
      v-for="item in favorite"
      :key="item.id"
      :id="item.id"
      :img-src="item.img[0]"
      :name="item.theme"
    />
  </div>
  <!-- 促銷區塊 -->
  <promotion-area />
  <h3>探索熱門趨勢地點的住宿</h3>
  <div class="pop-restaurant">
    <popular-card
      @click="changePage(`/rooms/${item.theme}?search=location`)"
      v-for="item in location"
      :key="item.id"
      :id="item.id"
      :img-src="item.img"
      :name="item.theme"
    />
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2rem;
  margin: 20px 0;
}
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
