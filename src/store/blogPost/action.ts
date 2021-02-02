import axios from 'axios';
import { sampleSize } from 'lodash';
import { Dispatch } from 'redux';

import { categories } from '../../data/data';
import { postBody, randomAuthor } from '../../helper/helper-function';
import {
  ADD_COMMENT,
  ADD_NEW_POST,
  ADD_POST,
  BlogPost,
  Comment,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST,
} from './type';

export const addPostAction = (posts: BlogPost[]) => {
  return {
    type: ADD_POST,
    posts,
  };
};

export const deletePostAction = (id: string) => {
  return {
    type: DELETE_POST,
    id,
  };
};

export const addNewPostAction = (post: BlogPost) => {
  return {
    type: ADD_NEW_POST,
    post,
  };
};
export const editPostAction = (post: BlogPost) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const addCommentAction = (newComment: Comment) => {
  return {
    type: ADD_COMMENT,
    newComment,
  };
};

export const deleteCommentAction = (commentId: string, id: string) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    id,
  };
};

export const getPostsData = () => {
  return async (dispatch: Dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
      const posts: BlogPost[] = data.map((post: { id: number; title: string; body: string }) => ({
        postId: `${post.id}`,
        title: post.title,
        body: postBody(post.body),
        author: randomAuthor(),
        date: Date.now(),
        image: `https://picsum.photos/id/${post.id + 10}/400/300`,
        category: sampleSize(categories, 2),
        comments: [],
      }));
      axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
        const comments: Comment[] = res.data.map(
          (comment: { postId: number; id: number; body: string; email: string }) => ({
            postId: `${comment.postId}`,
            commentId: `${comment.id}`,
            email: comment.email,
            body: comment.body,
          }),
        );
        posts.forEach((post: BlogPost) => {
          comments.forEach((comment: Comment) => {
            if (post.postId === comment.postId) {
              post.comments.push(comment);
            }
          });
        });
      });
      dispatch(addPostAction(posts));
    });
  };
};
