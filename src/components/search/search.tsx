import React, { FC } from 'react';
import styles from './search.module.scss';
import search from '../../images/search.svg';

type Props = {
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<Props> = ({ searchValue, handleSearchValue }) => {
  return (
    <div className={styles.search_wrap}>
      <input
        type="text"
        id="search"
        value={searchValue}
        className={styles.search}
        placeholder="search"
        onChange={(e) => handleSearchValue(e)}
      />
      <div className={styles.buttonWrapper}>
        {/* <button
          className={styles.button}
          type="button"
          onClick={() => {
            searchHandler();
          }}
        >
          <img src={search} alt="search" className={styles.icon} />
        </button> */}
      </div>
    </div>
  );
};

export default Search;
