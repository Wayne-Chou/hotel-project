<script setup>
import { RouterView } from "vue-router";
import Layout from "./components/Layout.vue";
import { homeApi } from "@/api/module/home";
import { onMounted, ref } from "vue";
import { useHouseStore } from "@/store/house";

const houseStore = useHouseStore();
const favorite = ref(houseStore.favorite);
const location = ref(houseStore.location);

const getThemes = async () => {
  const { data } = await homeApi.getThemes();
  // 頁面修改
  houses.favorite = data.favorite;
  houses.location = data.location;

  // 存進store
  houseStore.setFavorite(data.favorite);
  houseStore.setLocation(data.location);
  // favres.value = data.data;
  // console.log(data);
};

onMounted(() => {
  if (!favorite.value.length || !location.value.length) {
    getThemes();
  }
});
</script>
<template>
  <layout>
    <router-view />
  </layout>
</template>

<style scoped>
</style>



