<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  score: {
    type: Number,
  },
  price: {
    type: Number,
  },
  image: {
    type: Number,
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
});



const emit = defineEmits(['addToFavorite', 'changePage'])

const addToFavorite = () => {
  emit('addToFavorite')
}
const changePage = () => {
  emit('changePage')
}
const isFavorite = computed(() => props.isFavorite)
</script>

<template>
  <div class="hotel-item">
    <div class="transparent-mask" @click="changePage"></div>
    <div class="hotel-img">
      <img :src="image" alt="" @click="changePage" />
      <i :class="[`${isFavorite ? 'fa-solid' : 'fa-regular'}`]" class="fa-heart" @click="addToFavorite"></i>
    </div>
    <div class="hotel-data" @click="changePage">
      <div class="hotel-title">{{ title }}</div>
      <div class="hotel-des">
        {{ desc }}
      </div>
      <div class="hotel-review-price">
        <div class="hotel-review">
          <div class="hotel-score">{{ score }}</div>
        </div>
        <div class="hotel__price">
          <h3 class="price__title">價格資訊</h3>
          <p class="price__amount">${{ price }} / 晚</p>
          <span class="price__currency">新台幣</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.transparent-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
}
.hotel-item {
  overflow: hidden;
  display: flex;
  border: 1px solid;
  border-radius: 15px;
  position: relative;
}

.hotel-item .hotel-img {
  position: relative;
}

.hotel-item .hotel-img img {
  width: 100%;
  height: 100%;
  border-radius: 15px 0 0 15px;
}
.hotel-item i {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  background: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e61e43;
}

.hotel-box .hotel-data .hotel-title {
  padding: 30px 10px;
  font-size: 28px;
}

.hotel-box .hotel-data .hotel-des {
  padding: 0 10px;
  font-size: 16px;
}

.hotel-box .hotel-review-price {
  display: flex;

  padding: 20px 10px;
  justify-content: space-between;
}

.hotel-box .hotel-review-price .hotel-review {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hotel-box .hotel-review-price .hotel-review .hotel-score {
  color: #fff;
  background: #227950;
  padding: 5px;
  font-size: 16px;
  border-radius: 6px;
}

.hotel-box .hotel-review-price .hotel-review .hotel__description {
  font-size: 14px;
  font-weight: 600;
}

.hotel-box .hotel-review-price .hotel-review .review-count-number {
  font-size: 12px;
}
.hotel-box .hotel-search-result .hotel-item .hotel-img {
  width: 50%;
}
.hotel-box .hotel-search-result .hotel-item .hotel-data {
  width: 50%;
}
</style>