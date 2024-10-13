<script setup>
</script>

<template>
  <!-- 促銷區塊 -->
  <div class="Promotion-bac">
    <div class="Promotion-box">
      <div class="Promotio-title">秋季大促銷</div>
      <div class="Promotio-des">
        在熱門景點附近或遙遠的秘境找到最適合您的住宿，預訂精選飯店即享至少 75
        折。
      </div>
      <div class="Promotio-btn">解鎖優惠</div>
    </div>
  </div>
</template>
<style scoped>
/* 促銷區塊 */
.Promotion-bac {
  background-image: url("@/assets/img/landscape.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 30px 0;
}
.Promotion-bac .Promotion-box {
  margin-left: 50px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}
.Promotion-bac .Promotion-box .Promotio-title {
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 2.5rem;
  margin-bottom: 12px;
}
.Promotion-bac .Promotion-box .Promotio-des {
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 12px;
}
.Promotion-bac .Promotion-box .Promotio-btn {
  background: #1668e3;
  color: #fff;
  max-width: 120px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}
.Promotion-bac .Promotion-box .Promotio-btn:hover {
  background: #0d4eaf;
}
</style>
