import React, { FC } from 'react';
import { BlogPosts } from '../../store/blogPosts/type';
import Comment from '../comments/comments';
import styles from './article.module.scss';

type Props = {
  article: BlogPosts;
  backHandlerButton: () => void;
};

const Article: FC<Props> = ({ article, backHandlerButton }) => {
  const { title, body, image, author, date } = article;

  return (
    <div className={styles.articleWrapper}>
      <div className="row">
        <div className="col-xs-12">
          <div className={styles.article}>
            <div className={styles.imageWrapper}>
              <h1 className={styles.loading}>Loading...</h1>
              <img src={image} className={styles.image} alt="" />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <h4>
              Written by {author} on {date}
            </h4>
            <p>{body}</p>
          </div>
        </div>
      </div>
      <div className="row end-xs">
        <div className="col-xs-12">
          <div>
            <button
              className={styles.button}
              type="button"
              onClick={backHandlerButton}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div>Mazās kastītes</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <Comment comments={article.comments} postId={article.postId} />
        </div>
      </div>
    </div>
  );
};

export default Article;
