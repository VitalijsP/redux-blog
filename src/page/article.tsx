import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/data';

const Article: FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const article = blogPosts.find((item) => {
    return item.id === articleId;
  });

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row">
              <div className="col-xs-12">
                <h1>{article?.title}</h1>
                <p>{article?.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <img src="https://picsum.photos/150/150?random=?" alt="" />
                <h4>Small heading</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos, architecto.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h3>Comments</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  quis, deserunt incidunt sit explicabo autem error soluta
                  reprehenderit, facilis laboriosam commodi laborum, blanditiis
                  temporibus inventore iste sunt? Porro, dignissimos ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
