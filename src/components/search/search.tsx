import React, { FC } from 'react';
import styles from './search.module.scss';

type Props = {
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<Props> = ({ searchValue, handleSearchValue }) => {
  return (
    <div className={styles.searchWrap}>
      <input
        type="text"
        id="search"
        value={searchValue}
        className={styles.search}
        placeholder="search"
        onChange={(e) => handleSearchValue(e)}
      />
    </div>
  );
};

export default Search;
