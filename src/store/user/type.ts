export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const LOGOUT_USER = 'LOGOUT_USER';

export type UserType = {
  email?: string;
  userName?: string;
  pasword?: string;
  userType?: string;
};

export const usersData: UserType[] = [
  {
    email: 'vitalijs@gmail.com',
    userName: 'vitalijs',
    pasword: '12345',
    userType: 'user',
  },
  {
    email: 'mikus@gmail.com',
    userName: 'mikus',
    pasword: 'qwerty',
    userType: 'admin',
  },
];

export type UserLoginAction = {
  type: string;
  user: UserType;
};

export type LogoutUserAction = {
  type: string;
};

export type AllActions = UserLoginAction;


