import React, { FC } from 'react';
import NewArticleForm from '../components/new-article-form/new-article-form'; 

const NewArticle: FC = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <NewArticleForm 
              label='Edit your article'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArticle;
