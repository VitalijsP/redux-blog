import { SAVE_USER_INFO, LOGOUT_USER, UserType } from './type';

export const loginUserAction = (user: UserType) => {
  return {
    type: SAVE_USER_INFO,
    user,
  };
};

export const logoutUserAction = () => {
  return {
    type: LOGOUT_USER,
  };
};
