import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCommentAction, deleteCommentAction } from '../../store/blogPost/action';
import { Comment } from '../../store/blogPost/type';
import { RootState } from '../../store/store';
import { RegularButton } from '../atom/button/regular-button/regular-button';
import { Input } from '../atom/input/input';
import styles from './comments.module.scss';

type Props = {
  comments: Comment[];
  postId: string;
};

export const Comments: FC<Props> = ({ comments, postId }) => {
  const [value, setValue] = useState('');

  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();

  const commentSaveHandler = (commentPostId: string, body: string) => {
    if (value === '') {
      // eslint-disable-next-line no-alert
      alert('Komentāra lauks ir tukšs!');
      return;
    }
    const randomNumber = Math.floor(Math.random() * 100);
    if (loggedUser.email) {
      const newComment: Comment = {
        postId: commentPostId,
        commentId: `${randomNumber}`,
        email: loggedUser.email,
        body,
      };
      dispatch(addCommentAction(newComment));
      setValue('');
    }
  };

  const deleteCommentHandler = (commentId: string, id: string) => {
    dispatch(deleteCommentAction(commentId, id));
  };

  return (
    <div className={styles.commentWrapper}>
      <h1>Comments</h1>
      {comments.map(({ commentId, email, body }) => {
        return (
          <div key={commentId} className={styles.comments}>
            <div className="contain">
              <h5>{email}</h5>
              <p>{body}</p>
            </div>
            {loggedUser.userType === 'admin' && (
              <RegularButton
                type="button"
                actionHandler={() => {
                  deleteCommentHandler(commentId, postId);
                }}
              >
                Delete
              </RegularButton>
            )}
          </div>
        );
      })}
      {loggedUser.userType && (
        <div className={styles.inputWrapper}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              commentSaveHandler(postId, value);
            }}
          >
            <Input
              type="text"
              value={value}
              placeholder="Write Your comment here..."
              inputHandler={(e) => {
                setValue(e.target.value);
              }}
            />
            <RegularButton type="submit">
              Add comment
            </RegularButton>
          </form>
        </div>
      )}
    </div>
  );
};
