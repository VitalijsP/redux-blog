import { Dispatch } from 'redux';
import { sampleSize } from 'lodash';
import axios from 'axios';
import {
  BlogPosts,
  ADD_POSTS,
  DELETE_POSTS,
  ADD_COMMENT,
  ADD_NEW_POST,
  DELETE_COMMENT,
  EDIT_POST,
  Comments,
} from './type';
import { categories } from '../../data/data';
import { postBody, randomAuthor } from '../../helper/helper-function';

export const addPostAction = (posts: BlogPosts[]) => {
  return {
    type: ADD_POSTS,
    posts,
  };
};

export const deletePostAction = (id: string) => {
  return {
    type: DELETE_POSTS,
    id,
  };
};

export const addNewPostAction = (post: BlogPosts) => {
  return {
    type: ADD_NEW_POST,
    post,
  };
};
export const editPostAction = (post: BlogPosts) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const addCommentAction = (newComment: Comments) => {
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
      const posts: BlogPosts[] = data.map((post: { id: number; title: string; body: string }) => ({
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
        const comments: Comments[] = res.data.map(
          (comment: { postId: number; id: number; body: string; email: string }) => ({
            postId: `${comment.postId}`,
            commentId: `${comment.id}`,
            email: comment.email,
            body: comment.body,
          }),
        );
        posts.forEach((post: BlogPosts) => {
          comments.forEach((comment: Comments) => {
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
