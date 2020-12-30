import { cloneDeep } from 'lodash';
import {
  BlogPosts,
  BlogPostAction,
  AllActions,
  ADD_POSTS,
  DELETE_POSTS,
  ADD_COMMENT,
  DELETE_COMMENT,
} from './type';

const initialState: BlogPosts[] = [];

export const blogPostReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_POSTS: {
      return action.posts;
    }
    case DELETE_POSTS: {
      const clonedState = [...state];
      const indexId = clonedState.findIndex(
        (item) => item.id === action.id
      );
      clonedState.splice(indexId, 1);
      return clonedState;
    }
    case ADD_COMMENT: {
      const clonedState = cloneDeep(state);
      const postIndex = clonedState.findIndex(
        (post) => post.id === action.newComment.id
      );
      // console.log('action.newComment', action.newComment);
      const comment = action.newComment;
      clonedState[postIndex].comments.push(comment);
      // console.log('clonedState ', clonedState);
      return clonedState;
    }
    case DELETE_COMMENT: {
      const clonedState = cloneDeep(state);
      console.log(clonedState);
      const postIndex = clonedState.findIndex(
        (post) => post.id === action.id
      );
      const commentIndex = clonedState[postIndex].comments.findIndex(
        (comment) => comment.commentId === action.commentId
      );
      clonedState[postIndex].comments.splice(commentIndex, 1);
      return clonedState;
    }
    default:
      return state;
  }
};
