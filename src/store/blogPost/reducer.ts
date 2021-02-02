import { cloneDeep } from 'lodash';

import {
  ADD_COMMENT,
  ADD_NEW_POST,
  ADD_POST,
  AllActions,
  BlogPost,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST,
} from './type';

const initialState: BlogPost[] = [];

export const blogPostReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_POST: {
      return action.posts;
    }
    
    case DELETE_POST: {
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
      clonedState.splice(index, 1);
      clonedState.push(action.post);
      return clonedState;
    }

    case ADD_COMMENT: {
      const clonedState = cloneDeep(state);
      const postIndex = clonedState.findIndex((post) => post.postId === action.newComment.postId);
      const comment = action.newComment;
      clonedState[postIndex].comments.push(comment);
      return clonedState;
    }
    
    case DELETE_COMMENT: {
      const clonedState = cloneDeep(state);
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
