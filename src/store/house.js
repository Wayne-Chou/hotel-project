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
    const favoriteHotels = ref({
      favorite: [],
      location: [],
      hotel: [],
    });
    const setFavoriteHotels = (item, search) => {
      // TODO: 要登入才可以收藏
      const isFavorite = favoriteHotels.value[search]?.some(
        (hotel) => hotel.id === item.id
      );
      if (isFavorite) {
        // 移除最愛
        const newFavoriteHotels = favoriteHotels.value[search].filter(
          (hotel) => hotel.id !== item.id
        );
        favoriteHotels.value = {
          ...favoriteHotels.value,
          [search]: newFavoriteHotels,
        };
      } else {
        // 加入最愛
        favoriteHotels.value = {
          ...favoriteHotels.value,
          [search]: [...favoriteHotels.value[search], item],
        };
      }
    };

    return {
      favorite,
      location,
      setFavorite,
      setLocation,
      favoriteHotels,
      setFavoriteHotels,
    };
  },
  {
    persist: true, //預設存在localStorage
  }
);
