import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/store';
import { BlogPosts } from '../store/blogPosts/type';
import { addNewPostAction } from '../store/blogPosts/action';
import NewArticleForm from '../components/new-article-form/new-article-form';

const NewArticle: FC = () => {
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
      const newPost: BlogPosts = {
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
      alert('you need to log in');
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <NewArticleForm label="Create your article" submitHandler={submitHandler} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArticle;
