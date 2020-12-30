import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './card.module.scss';
import { BlogPosts } from '../../store/blogPosts/type';
import { blogPosts } from '../../data/data';
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
      <div className="row middle-xs">
        <div className="col-xs-4 flex center-xs">
          <img src={`${image}${postId}`} alt="" className={styles.image} />
        </div>
        <div className="col-xs-8">
          <div className="row">
            <div className="col-xs-12">
              <h3>{title}</h3>
              <p>{body.substring(0, 200)}...</p>
              <p>{date}</p>
              <p>
                {category[0]}, {category[1]}
              </p>
            </div>
          </div>
          <div className="row end-xs">
            <div className="col-xs-12">
              <button
                type="button"
                className={styles.btn}
                onClick={articleHandler}
              >
                <span className={styles.btn_text}>Read more...</span>
              </button>
              {loggedUser === 'admin' && (
                <button type="button" onClick={deleteHandler}>
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
