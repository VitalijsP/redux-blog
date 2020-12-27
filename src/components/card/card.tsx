import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './card.module.scss';
import { blogPosts } from '../../data/data';

const Card: FC = () => {
  const history = useHistory();

  const articleHandler = () => {

    history.push(`/article/${1}`);
  };

  return (
    <div>
      {blogPosts.map(({ id, title, description }) => {
        return (
          <div key={id} className={styles.card}>
            <div className="row middle-xs">
              <div className="col-xs-4 flex center-xs">
                <img
                  src={`https://picsum.photos/240/150?random=${id}`}
                  alt=""
                  className={styles.image}
                />
              </div>
              <div className="col-xs-8">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="row end-xs">
                  <div className="col-xs-12">
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={() => articleHandler()}
                    >
                      <span className={styles.btn_text}>Read more...</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
