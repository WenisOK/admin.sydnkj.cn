<script setup>
import 'bytemd/dist/index.min.css';
import byteMDLocale from 'bytemd/locales/zh_Hans.json';
import gfmLocale from '@bytemd/plugin-gfm/locales/zh_Hans.json';
import { Editor } from '@bytemd/vue-next';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/github.min.css';
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { ElMessageBox } from 'element-plus';
// 监听路由离开
onBeforeRouteLeave((to, from, next) => next(window.confirm('确定在未发布的情况下离开？')));
// 文章内容
const content = ref('');
// bytemd 插件
const plugins = [
  gfm({
    locale: gfmLocale,
  }),
  highlight(),
];
// 更新文章预览窗格
function handleChange(value) {
  content.value = value;
}
// 发布文章
function postArticle() {
  // TODO 发布文章功能
  return ElMessageBox({
    type: 'info',
    message: '功能开发中，敬请期待',
  });
}
</script>
<template>
  <div class="create-article-header">
    <ElInput placeholder="在此处键入标题..." size="large" class="create-article-title-input"></ElInput>
    <ElButton type="primary" @click="postArticle">发布</ElButton>
  </div>
  <Editor class="create-article-editor" :value="content" :locale="byteMDLocale" :plugins="plugins" @change="handleChange"> </Editor>
</template>
<style>
.create-article-editor .bytemd {
  min-height: 100vh;
}
.create-article-header {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
}
.create-article-title-input .el-input__wrapper {
  border: none !important;
  box-shadow: none !important;
  font-size: 24px;
}
</style>
