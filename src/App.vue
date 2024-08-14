<template>
  <ElConfigProvider :locale="zhCn">
    <ElContainer>
      <ElAside width="200px" style="min-height: 100vh">
        <MainMenu></MainMenu>
      </ElAside>
      <ElMain>
        <RouterView></RouterView>
      </ElMain>
    </ElContainer>
  </ElConfigProvider>
</template>
<script setup>
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs';
</script>
