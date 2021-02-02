import React, { FC } from 'react';

import styles from './filter-button.module.scss';

type Props = {
  label: string;
  chosenCategoryHandler: () => void;
};

export const FilterButton: FC<Props> = ({ label, chosenCategoryHandler }) => {
  return (
    <div className={styles.rapper}>
      <button key={label} type="button" className={styles.filerButton} onClick={chosenCategoryHandler}>
        <span># {label}</span>
      </button>
    </div>
  );
};

