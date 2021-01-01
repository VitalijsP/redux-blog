import React, { FC } from 'react';
import styles from './small-card.module.scss';

type Props = {
  title: string;
  body: string;
  image: string;
  articleHandler: () => void;
};

const SmallCard: FC<Props> = ({ title, body, image, articleHandler }) => {
  return (
    <div className={styles.smallCard}>
      <div className="row">
        <div className="col-xs-12">
          <div className={styles.imageWrapper}>
            <h3 className={styles.loading}>Loading...</h3>
            <img className={styles.image} src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.body}>{body.substring(0, 100)}...</p>
          <div className="row end-xs">
            <div className="col-xs-12">
              <button type="button" className={styles.buttonReadMore} onClick={articleHandler}>
                <span className={styles.buttonText}>Read more...</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
