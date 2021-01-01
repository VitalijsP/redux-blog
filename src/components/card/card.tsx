import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './card.module.scss';
import { BlogPosts } from '../../store/blogPosts/type';
import { RootState } from '../../store/store';

type Props = {
  post: BlogPosts;
  deleteHandler: () => void;
  articleHandler: () => void;
};

const Card: FC<Props> = ({ post, deleteHandler, articleHandler }) => {
  const { image, postId, body, title, date, category } = post;

  const loggedUser = useSelector((state: RootState) => state.userInfo.userType);

  return (
    <div key={postId} className={styles.card}>
      <div className="row">
        <div className="col-sm-4 col-xs-12 flex center-xs">
          <div className={styles.imageWrapper}>
            {/* <h1 className={styles.loading}>Loading...</h1> */}
            <img src={image} alt="" className={styles.image} />
          </div>
        </div>
        <div className="col-sm-8 col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.subTitle}>{moment.unix(date / 1000).format('MMMM Do YYYY, h:mm:ss a')}</p>
              <p className={styles.body}>{body.substring(0, 200)}...</p>
              <p className={styles.body}>
                {category[0]}, {category[1]}
              </p>
            </div>
          </div>
          <div className="row end-xs">
            <div className="col-xs-12">
              <button type="button" className={styles.buttonReadMore} onClick={articleHandler}>
                <span className={styles.buttonText}>Read more...</span>
              </button>
              {loggedUser === 'admin' && (
                <button type="button" className={styles.button} onClick={deleteHandler}>
                  <span>Delete</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
