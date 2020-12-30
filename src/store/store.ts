import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { blogPostReducer } from './blogPosts/reducer';
import { loginUserReducer } from './user/reducer';

const rootReducer = combineReducers({
  blogPosts: blogPostReducer,
  userInfo: loginUserReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
