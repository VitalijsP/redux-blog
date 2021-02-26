import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { NewArticleForm } from '../components/new-article-form/new-article-form';
import { editPostAction } from '../store/blogPost/action';
import { BlogPost } from '../store/blogPost/type';
import { RootState } from '../store/store';

export const EditPostPage: FC = () => {
  const loggedUser = useSelector((state: RootState) => state.userInfo.userName);
  const history = useHistory();
  const dispatch = useDispatch();
  const { slug } = useParams<{ slug: string }>();

  const article = useSelector((state: RootState) => state.blogPosts.find((post) => post.postId === slug));

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    image: string,
    selectedOption1: string,
    selectedOption2: string,
  ) => {
    e.preventDefault();
    if (loggedUser && article) {
      const newPost: BlogPost = {
        postId: article.postId,
        title,
        body,
        author: loggedUser,
        date: Date.now(),
        image,
        category: [selectedOption1, selectedOption2],
        comments: article.comments,
      };

      dispatch(editPostAction(newPost));
      history.push('/home');
    } else {
      // eslint-disable-next-line no-alert
      alert('You must to log in first!');
    }
  };

  return (
    <div>
      <section>
        <div className="container container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <NewArticleForm label="Edit your article" submitHandler={submitHandler} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
