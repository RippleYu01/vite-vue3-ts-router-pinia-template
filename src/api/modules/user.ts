// src/api/modules/user.ts
import { get } from "@/utils/request";
import type { IUserInfo } from "@/types";

export const getUserInfo = (params: { postId: number }) => {
  return get<IUserInfo.IUserInfo[]>("/api/comments", params);
};

// export const login = (data: { username: string; password: string }) => {
//   return request.post('/auth/login', data)
// }
