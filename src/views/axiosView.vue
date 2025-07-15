<template>
    <div>
        <h1>测试axios</h1>

        <div v-for='user in userInfo'>
            <p>userId:{{ user.id }}</p>
            <p>title:{{ user.email }}</p>
            <p>~~~~~~~~~~~~~~~~</p>
        </div>
        <button @click="axiosFun">发起请求</button>
    </div>
</template>

<script setup lang="ts">
import { userApi } from '@/api';
import type { IUserInfo } from '@/types';

const userInfo = ref<IUserInfo.IUserInfo[]>([])

const axiosFun = async () => {
    const res = await userApi.getUserInfo({ postId: 1 });
    userInfo.value.push(...res.data);
}

</script>

<style scoped></style>