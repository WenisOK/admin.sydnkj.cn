<template>
  <div class="page-login">
    <div class="login-blank">
      <ElImage id="login-image" src="/assets/images/bg.jpg" fit="cover" />
      <ElForm id="login-form" label-position="top" :model="formData" :hide-required-asterisk="true" :rules="formData.rules" ref="loginFormRef">
        <div id="login-blank-title">管理员登录</div>
        <ElFormItem label="账号" prop="username">
          <ElAutocomplete @select="validateForm" :fetch-suggestions="usernameSuggestions" placeholder="手机号 / 邮箱地址" type="text" v-model="formData.username" />
        </ElFormItem>
        <ElFormItem label="密码" prop="password">
          <ElInput placeholder="密码" type="password" v-model="formData.password" :show-password="true" />
        </ElFormItem>
        <ElButton id="login-form-submit-btn" @click="Login" type="primary">登录</ElButton>
      </ElForm>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

//表单ref
const loginFormRef = ref(null);
// 表单数据
const formData = ref({
  username: '',
  password: '',
  ruleLockTime: 0,
  ruleInterval: null,
  rules: {
    username: [
      { required: true, message: '手机号/邮箱不能为空', trigger: 'change' },
      {
        validator: (rule, value, cb) => {
          if (!/^1[3-9]\d{9}$/.test(value) && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return cb(new Error('手机号或邮箱格式不正确'));
        },
        trigger: 'blur',
      },
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'change' },
      {
        min: 8,
        message: '密码格式不正确',
        trigger: 'blur',
      },
    ],
  },
});

/**
 * 用户名自动补全
 */
function usernameSuggestions(str, cb) {
  let result = [];
  if (/^.+@/.test(str)) {
    let values = ['163.com', '126.com', 'qq.com', 'foxmail.com', '189.cn', '139.com', 'wo.com'];
    let match = str.match(/^(.+@)(.+)?$/);
    if (match) {
      let _result = values.filter((item) => item.indexOf(match[2]) == 0);
      for (let i = 0; i < _result.length; i++) {
        result.push({ value: match[1] + _result[i] });
      }
    }
  }
  return cb(result);
}

function Login() {
  loginFormRef.value.validate((valid) => {
    if (!valid) return; // 未通过表单校验，不执行下面的操作
    //TODO 执行登录操作
  });
}

/**
 * 手动验证
 */
function validateForm() {
  return loginFormRef.value.validate();
}
</script>

<style>
.page-login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(/assets/images/bg-large.jpg);
  background-size: cover;
  background-position: center center;
}
.login-blank {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  min-height: 350px;
  align-items: stretch;
}
#login-form {
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#login-form .el-form-item {
  width: 100%;
}
#login-blank-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
#login-form-submit-btn {
  width: 100%;
}
#login-image {
  max-width: 400px;
}
</style>
