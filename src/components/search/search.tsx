import React, { FC } from 'react';
import styles from './search.module.scss';

const Search: FC = () => {
  return (
    <div className={styles.search_wrap}>
      <input type="text" id="search" className={styles.search} placeholder="search" />
      <img src="search.svg" alt="" className={styles.icon} />
    </div>
  );
};

export default Search;
