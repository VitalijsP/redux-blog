import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { BlogPosts } from '../store/blogPosts/type';
import { editPostAction } from '../store/blogPosts/action';
import NewArticleForm from '../components/new-article-form/new-article-form';

const EditArticle: FC = () => {
  const loggedUser = useSelector((state: RootState) => state.userInfo.userName);
  const history = useHistory();
  const dispatch = useDispatch();
  const { articleId } = useParams<{ articleId: string }>();

  const article = useSelector((state: RootState) => state.blogPosts.find((post) => post.postId === articleId));

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
      const newPost: BlogPosts = {
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
      alert('you need to log in');
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <NewArticleForm label="Edit your article" submitHandler={submitHandler} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditArticle;
