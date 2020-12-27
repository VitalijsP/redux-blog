import React, { FC } from 'react';
import styles from './search.module.scss';
import search from '../../images/search.svg';

const Search: FC = () => {
  return (
    <div className={styles.search_wrap}>
      <input
        type="text"
        id="search"
        className={styles.search}
        placeholder="search"
      />
      <img src={search} alt="search" className={styles.icon} />
    </div>
  );
};

export default Search;
