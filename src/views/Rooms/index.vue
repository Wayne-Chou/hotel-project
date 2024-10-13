<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router'
import { useHouseStore } from "@/store/house";
import { computed, ref } from 'vue'
import HotelCard from '@/components/HotelCard.vue'

const route = useRoute()
const houseStore = useHouseStore()
const theme = ref(route.params.theme)

const database = computed(() => route.query.search === 'favorite' ? houseStore.favorite : houseStore.location)

const themeData = computed(() => {
  return database.value.filter(item => item.theme === theme.value)
})

const filterData = ref(themeData.value)

const cityOptions = ref(['全部', '台北', '新北'])

const filterCity = (e) => {
  const city = e.key
  if (city === '全部') {
    filterData.value = themeData.value
    return
  }
  filterData.value = themeData.value.filter(item => item.city === e.key)
}
</script>

<template>
  <div class="filter-bar">
    <a-dropdown>
      <template #overlay>
        <a-menu @click="filterCity">
          <a-menu-item v-for="item in cityOptions" :key="item">
            {{ item }}
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        城市
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </div>
  <div class="hotel-box">
    <div class="hotel-search-result">
      <hotel-card v-for="item in filterData" :key="item.id" :title="item.title" :desc="item.desc" :image="item.img"
        :score="item.score" :price="item.price" />
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11583.007640264934!2d121.55355662430571!3d25.03399414749998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9724aaba2bf%3A0xbac4c904d0cf28bc!2z5Y-w5ZyL5biC!5e0!3m2!1szh-TW!2stw!4v1727577660187!5m2!1szh-TW!2stw"
        width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style scoped>
/* 排序樣式 */
.filter-bar {
  padding: 20px;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 20px;
}

.hotel-box {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 20px;
}

.hotel-box .hotel-search-result {
  width: 45%;
  overflow-y: scroll;
}
.hotel-box .map {
  width: 55%;
}
</style>