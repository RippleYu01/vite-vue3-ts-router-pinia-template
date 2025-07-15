<template>
  <div>
    <h1>测试pinia</h1>
    <p v-if="login.userInfo[1]">UserInfo:{{ login.userInfo[1] }}</p>
    <div>账号：<input type="text" v-model="login.userName" /></div>
    <div>密码：<input type="text" v-model="login.passWord" /></div>

    <button @click="piniaFun">发起请求</button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login';
const login = useLoginStore();

const piniaFun = () => {
  login.login();
};
</script>

<style scoped></style>
