import React, { FC } from 'react';
import styles from './filter-button.module.scss';

type Props = {
  label: string;
  chosenCategoryHandler: () => void;
};

const FilterButton: FC<Props> = ({ label, chosenCategoryHandler }) => {
  return (
    <div className={styles.filterButtonWrapper}>
      <div className="col-xs-12">
        <button
          key={label}
          type="button"
          className={styles.filerButton}
          onClick={chosenCategoryHandler}
        >
          # {label}
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
