import React, { FC } from 'react';

import styles from './image.module.scss';

type Props = {
  link: string;
  width?: number;
  height?: number;
  loading?: boolean;
  alt?: string;
};

export const Image: FC<Props> = ({ alt, loading, width = 100, height = 100, link }) => {
 
  return (
    <figure className={styles.figure} style={{ paddingTop: `${(height / width) * 100}%` }}>
      {loading && <h1 className={styles.loading}>Loading...</h1>}
      <img src={link} className={styles.image} alt={alt} />
    </figure>
  );
};
