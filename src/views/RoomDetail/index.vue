<script setup>
import { useRoute, useRouter } from "vue-router";
import { useHouseStore } from "@/store/house";
import { computed, ref } from "vue";
import ReservationCard from "@/components/ReservationCard.vue";
import { iconName } from "@/utils/iconName.js";

const route = useRoute();
const router = useRouter();
const houseStore = useHouseStore();

const routeId = ref(Number(route.params.id));
const search = ref(route.query.search);

const database = computed(() =>
  search.value === "favorite" ? houseStore.favorite : houseStore.location
);

const room = computed(() => {
  return database.value.find((item) => item.id === routeId.value);
});
console.log(iconName);
</script>
<template>
  <div class="RoomDetail-img-box">
    <div class="grid-container">
      <div class="large-image">
        <img :src="room.img[1]" alt="Large Image" />
      </div>
      <div class="small-images">
        <div class="small-image">
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Small Image 1"
            />
          </div>
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Small Image 2"
            />
          </div>
        </div>
        <div class="small-image">
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Small Image 3"
            />
          </div>
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Small Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Hotel-Introduction-box">
    <div class="Hotel-title">{{ room.title }}</div>
    <div class="Hotel-des">{{ room.desc }}</div>
  </div>
  <div class="Hotel-subtitle">熱門設施服務</div>
  <div class="hotel-amenities">
    <div v-for="item in room.equipments" :key="item.value" class="amenity">
      <i :class="iconName[item.value]"></i>
      {{ item.label }}
    </div>
  </div>

  <div class="Room-items">
    <reservation-card
      v-for="item in room.reservation"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :type="item.type"
      :bed="item.bed"
      :theme="room.theme"
      :size="item.size"
      :service="item.service"
      :price="item.price"
    />
  </div>
</template>
<style scoped>
.grid-container {
  display: flex;
  gap: 10px;
}
.grid-container .small-images {
  display: flex;
  gap: 10px;
}
.grid-container .large-image {
  max-width: 600px;
}
.grid-container .large-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-container .small-images .small-image .image {
  max-width: 400px;
}
.grid-container .small-images .small-image .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Hotel-Introduction-box */
.Hotel-Introduction-box {
  margin: 20px 0;
}
.Hotel-Introduction-box .Hotel-title {
  font-size: 38px;
  margin-bottom: 10px;
}
.Hotel-Introduction-box .Hotel-des {
  font-size: 20px;
}
/* hotel-amenities */
.Hotel-subtitle {
  font-size: 30px;
}
.hotel-amenities {
  margin: 20px 0;
}
.hotel-amenities .amenity {
  font-size: 20px;
  margin: 10px 0;
}
/* Room-items */
.Room-items {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 20px;
}
</style>