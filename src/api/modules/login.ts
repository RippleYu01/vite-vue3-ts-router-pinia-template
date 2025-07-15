import { get } from '@/utils/request';
import type { IUserLoginData, IUserInfo } from '@/types/store/login';

export const loginApi = (params: IUserLoginData) => {
  return get<IUserInfo[]>('/api/todos', params);
};
