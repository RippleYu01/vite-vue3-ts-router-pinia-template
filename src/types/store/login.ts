export interface IUserInfo {
  id: number;
  userId: string;
  title: string;
  completed: boolean;
}

export interface IUserLoginData {
  userName: string;
  passWord: string;
}

export interface ILoginState extends IUserLoginData {
  userInfo: IUserInfo[];
}
