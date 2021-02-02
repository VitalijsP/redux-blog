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
  const paddingTop = {
    paddingTop: `${(height / width) * 100}%`,
  };

  return (
    <div style={paddingTop} className={styles.imageWrapper}>
      {/* {loading && <h1 className={styles.loading}>Loading...</h1>} */}
      <img src={link} width={width} height={height} className={styles.image} alt={alt} />
    </div>
  );
};
