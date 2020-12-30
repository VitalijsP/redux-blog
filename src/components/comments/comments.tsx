import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './comments.module.scss';
import { Comments } from '../../store/blogPosts/type';
import {
  addCommentAction,
  deleteCommentAction,
} from '../../store/blogPosts/action';
import { RootState } from '../../store/store';

type Props = {
  comments: Comments[];
  postId: string;
};

const Comment: FC<Props> = ({ comments, postId }) => {
  const [value, setValue] = useState('');

  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();

  const commentSaveHandler = (commentPostId: string, body: string) => {
    if (value === '') {
      alert('nav ierakstīts komentārs');
      return;
    }
    const randomNumber = Math.floor(Math.random() * 100);
    if (loggedUser.email) {
      const newComment: Comments = {
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
    <div className={styles.comments_wrap}>
      <div className="row">
        <div className="col-xs-12">
          <h3 className="margin-bottom--8">Comments</h3>
          {comments.map(({ commentId, email, body }) => {
            return (
              <div key={commentId} className={styles.comments}>
                <div className="row middle-xs">
                  <div className="col-xs-11">
                    <div>
                      <h5>{email}</h5>
                      <span>{body}</span>
                    </div>
                  </div>
                  <div className="col-xs-1">
                    {loggedUser.userType === 'admin' && (
                      <button
                        className={styles.button}
                        type="button"
                        onClick={() => {
                          deleteCommentHandler(commentId, postId);
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {loggedUser.email && (
            <div className={styles.input_wrap}>
              <div className="row middle-xs margin-bottom--8">
                <div className="col-xs-12">
                  <form action="">
                    <input
                      type="text"
                      id="password"
                      value={value}
                      className={styles.input}
                      placeholder="Write Your comment here..."
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    />
                  </form>
                </div>
              </div>
              <div className="row end-xs">
                <div className="col-xs-12">
                  <button
                    className={styles.button}
                    type="submit"
                    onClick={() => {
                      commentSaveHandler(postId, value);
                    }}
                  >
                    Add comment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
