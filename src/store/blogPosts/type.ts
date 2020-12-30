export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export type BlogPosts = {
  postId: string;
  title: string;
  body: string;
  author: string;
  date: number;
  image: string;
  category: string[];
  comments: Comments[];
};

export type Comments = {
  postId: string;
  commentId: string;
  email: string;
  body: string;
};

export type BlogPostAction = {
  type: typeof ADD_POSTS;
  posts: BlogPosts[];
};

export type DeletePostAction = {
  type: typeof DELETE_POSTS;
  id: string;
};

export type CommentAddAction = {
  type: typeof ADD_COMMENT;
  newComment: Comments;
};

export type CommentDeleteAction = {
  type: typeof DELETE_COMMENT;
  commentId: string;
  id: string;
};

export type AllActions =
  | BlogPostAction
  | DeletePostAction
  | CommentAddAction
  | CommentDeleteAction;
