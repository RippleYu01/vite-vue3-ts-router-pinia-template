import { defineStore } from 'pinia';
import type { ILoginState } from '@/types/store/login';
import { loginApi } from '@/api/modules/login';

export const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    userName: '',
    passWord: '',
    userInfo: [
      {
        id: 0,
        userId: '',
        title: '',
        completed: false
      }
    ]
  }),
  getters: {},
  actions: {
    async login() {
      const res = await loginApi({
        userName: this.userName,
        passWord: this.passWord
      });
      this.userInfo.push(...res.data);
    }
  }
});
