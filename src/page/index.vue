<template>
  <div class="index-page">
    <h1>信丰县书彦电脑科技工作室</h1>
    <button @click="rediretLoginPage">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

/**
 * 前往登录页面
 */
function rediretLoginPage() {
  router.push('/login');
}
</script>
