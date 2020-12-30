import { AllActions, SAVE_USER_INFO, LOGOUT_USER, UserType } from './type';

const initialState: UserType = {};

export const loginUserReducer = (
  state = initialState,
  action: AllActions
): UserType => {
  switch (action.type) {
    case SAVE_USER_INFO: {
      return action.user;
    }
    case LOGOUT_USER: {
      return {};
    }
    default:
      return state;
  }
};
