import React, { FC } from 'react';

import { RegularButton } from '../../atom/button/regular-button/regular-button';
import { Image } from '../../atom/image/image';
import styles from './small-card.module.scss';

type Props = {
  title: string;
  body: string;
  image: string;
  category: string[];
  articleHandler: () => void;
};

export const SmallCard: FC<Props> = ({ title, body, image, category, articleHandler }) => {
  return (
    <div className={styles.smallCard}>
      <div className={styles.content}>
        <Image link={image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body.substring(0, 100)}...</p>
        <p className={styles.body}>
          {category[0]}, {category[1]}
        </p>
      </div>
      <RegularButton type="button" actionHandler={articleHandler}>Read more</RegularButton>
    </div>
  );
};
