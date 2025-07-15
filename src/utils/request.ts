// src/utils/request.ts
import http from './http'

export function get<T = any>(url: string, params?: any) {
  return http.get<T>(url, { params })
}

export function post<T = any>(url: string, data?: any) {
  return http.post<T>(url, data)
}

export function put<T = any>(url: string, data?: any) {
  return http.put<T>(url, data)
}

export function del<T = any>(url: string, params?: any) {
  return http.delete<T>(url, { params })
}
