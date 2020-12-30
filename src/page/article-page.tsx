import React, { FC } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Article from '../components/article/article';
import { RootState } from '../store/store';

const ArticlePage: FC = () => {
  const history = useHistory();
  const { articleId } = useParams<{ articleId: string }>();

  const article = useSelector((state: RootState) =>
    state.blogPosts.find((item) => item.postId === articleId)
  );

  const backHandler = () => {
    history.push('/home');
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            {article && (
              <Article
                backHandlerButton={() => backHandler()}
                article={article}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
