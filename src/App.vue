<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<!-- 因为技术原因，该页面是所有页面的入口，本页仅放置会出现的两个主组件 -->
<template>
  <a-config-provider :theme="{
    token: {
      colorPrimary: '#ffa500', colorWarning: '#a717ff' } }">
    <div style="font-family: MiSans-Regular;">
      <RouterView />
    </div>

  </a-config-provider>
</template>

<style scoped></style>
