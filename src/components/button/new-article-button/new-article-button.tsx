import React, { FC } from 'react';
import styles from './new-article-button.module.scss';

type Props = {
  newArticleHandler: () => void;
};

const NewArticleButton: FC<Props> = ({ newArticleHandler }) => {
  return (
    <div>
      <button type="button" className={styles.button} onClick={newArticleHandler}>
        <span>Create article</span>
      </button>
    </div>
  );
};

export default NewArticleButton;
