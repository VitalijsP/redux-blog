import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { Article } from '../components/article/article';
import { RootState } from '../store/store';

export const ArticlePage: FC = () => {
  const history = useHistory();
  const { articleId } = useParams<{ articleId: string }>();

  const article = useSelector((state: RootState) => state.blogPosts.find((item) => item.postId === articleId));

  const backHandler = () => {
    history.push('/home');
  };

  return (
    <section>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {article && (
              <Article backHandlerButton={() => backHandler()} article={article} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
