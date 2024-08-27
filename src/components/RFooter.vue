<script setup>
</script>

<template>
  <footer class="footer">
    <div>
      <h3>熱門目的地</h3>
      <a href="">台北飯店</a>
      <a href="">高雄飯店</a>
      <a href="">礁溪飯店</a>
    </div>
    <div>
      <h3>支援和常見問題</h3>
      <a href="">您的預訂</a>
      <a href="">常見問題</a>
      <a href="">聯絡我們</a>
    </div>
    <div>
      <h3>其他資訊</h3>
      <a href="">關於我們</a>
      <a href="">工作機會</a>
      <a href="">旅遊指南</a>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  max-width: 1280px;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.footer div a {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #1668e3;
}
.footer div a:hover {
  text-decoration: underline;
}
</style>
