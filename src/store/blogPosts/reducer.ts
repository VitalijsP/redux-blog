import { cloneDeep } from 'lodash';
import {
  BlogPosts,
  AllActions,
  ADD_POSTS,
  ADD_NEW_POST,
  DELETE_POSTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_POST,
} from './type';

const initialState: BlogPosts[] = [];

export const blogPostReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_POSTS: {
      return action.posts;
    }
    case DELETE_POSTS: {
      const clonedState = [...state];
      const indexId = clonedState.findIndex((item) => item.postId === action.id);
      clonedState.splice(indexId, 1);
      return clonedState;
    }
    case ADD_NEW_POST: {
      const clonedState = [...state];
      clonedState.push(action.post);
      return clonedState;
    }
    case EDIT_POST: {
      const clonedState = cloneDeep(state);
      const index = clonedState.findIndex((post) => post.postId === action.post.postId);
      console.log(index);
      clonedState.splice(index, 1);
      clonedState.push(action.post);
      return clonedState;
    }

    case ADD_COMMENT: {
      const clonedState = cloneDeep(state);
      const postIndex = clonedState.findIndex((post) => post.postId === action.newComment.postId);
      // console.log('action.newComment', action.newComment);
      const comment = action.newComment;
      clonedState[postIndex].comments.push(comment);
      // console.log('clonedState ', clonedState);
      return clonedState;
    }
    case DELETE_COMMENT: {
      const clonedState = cloneDeep(state);
      console.log(clonedState);
      const postIndex = clonedState.findIndex((post) => post.postId === action.id);
      const commentIndex = clonedState[postIndex].comments.findIndex(
        (comment) => comment.commentId === action.commentId,
      );
      clonedState[postIndex].comments.splice(commentIndex, 1);
      return clonedState;
    }
    default:
      return state;
  }
};
