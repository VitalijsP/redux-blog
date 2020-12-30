import { Dispatch } from 'redux';
import { sampleSize } from 'lodash';
import axios from 'axios';
import {
  BlogPosts,
  ADD_POSTS,
  DELETE_POSTS,
  ADD_COMMENT,
  DELETE_COMMENT,
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
      console.log('data axios:', data);
      const posts = data.map((post: BlogPosts) => ({
        id: post.id,
        title: post.title,
        body: postBody(post.body),
        author: randomAuthor(),
        date: Date(),
        image: `https://picsum.photos/id/${post.id + 10}/500/500`,
        category: sampleSize(categories, 2),
        comments: [],
      }));
      axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
        const comments = res.data.map((comment: Comments) => ({
          id: `${comment.id}`,
          commentId: `${comment.commentId}`,
          email: comment.email,
          body: comment.body,
        }));
        posts.forEach((post: BlogPosts) => {
          comments.forEach((comment: Comments) => {
            if (post.id === comment.id) {
              post.comments.push(comment);
            }
          });
        });
      });
      dispatch(addPostAction(posts));
    });
  };
};
