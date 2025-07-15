// src/utils/http.ts
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(config => {
  // 可在此注入 token
  // const token = localStorage.getItem('token')
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config;
});

// 响应拦截器
service.interceptors.response.use(
  // (res: AxiosResponse) => {
  //   const { code, data, msg } = res.data
  //   //和后端统一约定 code
  //   if (code === 0) return data
  //   // 可统一处理错误提示
  //   // window.$message?.error(msg || '请求失败')
  //   return Promise.reject(new Error(msg || '请求失败'))
  // },

  (res: AxiosResponse) => {
    return res;
  },

  err => {
    // window.$message?.error(err.message || '网络错误')
    return Promise.reject(err);
  }
);

export default service;
