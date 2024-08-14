<template>
  <ElMenu :unique-opened="true" default-active="/" :router="true" style="height: 100%">
    <ElMenuItem index="/">仪表盘</ElMenuItem>
    <ElSubMenu index="article">
      <template #title>
        <b>文章管理</b>
      </template>
      <ElMenuItem index="/create/article">发布文章</ElMenuItem>
      <ElMenuItem index="/manager/article">文章列表</ElMenuItem>
    </ElSubMenu>
    <ElSubMenu index="user">
      <template #title>
        <b>用户管理</b>
      </template>
      <ElMenuItem index="/create/user">创建用户</ElMenuItem>
      <ElMenuItem index="/manager/user">用户管理</ElMenuItem>
    </ElSubMenu>
    <ElSubMenu index="media">
      <template #title>
        <b>媒体管理</b>
      </template>
      <ElMenuItem index="/manager/media">媒体库</ElMenuItem>
    </ElSubMenu>
  </ElMenu>
</template>
<script setup></script>
