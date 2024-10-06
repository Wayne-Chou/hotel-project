import { defineStore } from "pinia";
import { ref } from "vue";
export const useHouseStore = defineStore(
  "house",
  () => {
    const favorite = ref([]);
    const setFavorite = (newFavorite) => {
      favorite.value = newFavorite;
    };
    const location = ref([]);
    const setLocation = (newLocation) => {
      location.value = newLocation;
    };
    return {
      favorite,
      location,
      setFavorite,
      setLocation,
    };
  },
  {
    persist: true, //預設存在localStorage
  }
);
