export type UserType = {
  email: string;
  userName: string;
  pasword: string;
  userType: string;
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
