export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const EDIT_POST = 'EDIT_POST';

export type BlogPost = {
  postId: string;
  title: string;
  body: string;
  author: string;
  date: number;
  image: string;
  category: string[];
  comments: Comment[];
};

export type Comment = {
  postId: string;
  commentId: string;
  email: string;
  body: string;
};

export type BlogPostAction = {
  type: typeof ADD_POST;
  posts: BlogPost[];
};

export type DeletePostAction = {
  type: typeof DELETE_POST;
  id: string;
};
export type AddNewPostAction = {
  type: typeof ADD_NEW_POST;
  post: BlogPost;
};
export type EditPostAction = {
  type: typeof EDIT_POST;
  post: BlogPost;
};

export type CommentAddAction = {
  type: typeof ADD_COMMENT;
  newComment: Comment;
};

export type CommentDeleteAction = {
  type: typeof DELETE_COMMENT;
  commentId: string;
  id: string;
};

export type AllActions =
  | BlogPostAction
  | DeletePostAction
  | AddNewPostAction
  | EditPostAction
  | CommentAddAction
  | CommentDeleteAction;
