import React, { FC } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { BlogPosts } from '../../store/blogPosts/type';
import Comment from '../comments/comments';
import styles from './article.module.scss';
import SmallCard from '../small-card/small-card';
import { smallCardData } from '../../data/data';

type Props = {
  article: BlogPosts;
  backHandlerButton: () => void;
  editHandler: () => void;
};

const Article: FC<Props> = ({ editHandler, article, backHandlerButton }) => {
  const { title, body, image, author, date } = article;

  const history = useHistory();

  const articleHandler = () => {
    history.push('`/article/${postID}`');
  };

  return (
    <div className={styles.articleWrapper}>
      <div className="row">
        <div className="col-xs-6">
          <button className={styles.button} type="button" onClick={backHandlerButton}>
            Go back
          </button>
        </div>
        <div className="col-xs-6 flex end-xs">
          <button 
            className={styles.button} 
            type="button"
            onClick={editHandler}  
          >
            Edit
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className={styles.article}>
            <div className={styles.imageWrapper}>
              <h1 className={styles.loading}>Loading...</h1>
              <img src={image} className={styles.image} alt="" />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <h4 className={styles.subTitle}>
              Written by {author} on {moment.unix(date / 1000).format('MMMM Do YYYY, h:mm:ss a')}
            </h4>
            <p className={styles.body}>{body}</p>
          </div>
        </div>
      </div>
      <div className="row">
        {smallCardData.map(({ title1, body1, image1, id1 }) => (
          <div key={id1} className="col-md-4 col-sm-6 col-xs-12">
            <SmallCard title={title1} body={body1} image={image1} articleHandler={articleHandler} />
          </div>
        ))}
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
