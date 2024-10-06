<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import FavoriteCard from "@/components/FavoriteCard.vue";
import PopularCard from "@/components/PopularCard.vue";
// import { homeApi } from "@/api/module/home";
import { reactive } from "vue";
import { useHouseStore } from "../../store/house";

const houseStore = useHouseStore();
console.log(houseStore);
const houses = reactive({
  favorite: houseStore.favorite,
  location: houseStore.location,
});

// onMounted(() => getThemes());
</script>

<template>
  <h3>探索你最愛的住宿</h3>
  <div class="fav-restaurant">
    <favorite-card
      v-for="item in houses.favorite"
      :key="item.id"
      :id="item.id"
      :img-src="item.img"
      :name="item.theme"
    />
  </div>
  <h3>探索熱門趨勢地點的住宿</h3>
  <div class="pop-restaurant">
    <popular-card
      v-for="item in houses.location"
      :key="item.id"
      :id="item.id"
      :img-src="item.img"
      :name="item.theme"
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
