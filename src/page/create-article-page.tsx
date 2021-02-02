import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { NewArticleForm } from '../components/new-article-form/new-article-form';
import { addNewPostAction } from '../store/blogPost/action';
import { BlogPost } from '../store/blogPost/type';
import { RootState } from '../store/store';

export const NewArticle: FC = () => {
  const loggedUser = useSelector((state: RootState) => state.userInfo.userName);
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    image: string,
    selectedOption1: string,
    selectedOption2: string,
  ) => {
    e.preventDefault();
    if (loggedUser) {
      const newPost: BlogPost = {
        postId: uuidv4(),
        title,
        body,
        author: loggedUser,
        date: Date.now(),
        image,
        category: [selectedOption1, selectedOption2],
        comments: [],
      };
      dispatch(addNewPostAction(newPost));
      history.push('/home');
    } else {
      // eslint-disable-next-line no-alert
      alert('you need to log in');
    }
  };

  return (
    <div>
      <section>
        <div className="container container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <NewArticleForm label="Create your article" submitHandler={submitHandler} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
