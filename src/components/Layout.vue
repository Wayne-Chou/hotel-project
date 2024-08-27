<script setup>
import RHeader from "@/components/RHeader.vue";
import RFooter from "@/components/RFooter.vue";
</script>

<template>
  <div class="wrapper">
    <r-header />
    <div class="container">
      <slot></slot>
    </div>
    <r-footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* container */
.container {
  flex: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
</style>
