import React, { FC } from 'react';
import styles from './filter-button.module.scss';

type Props = {
  key?: string;
  label: string;
  chosenCategoryHandler: () => void;
};

const FilterButton: FC<Props> = ({ key, label, chosenCategoryHandler }) => {
  return (
    <div>
      <div className="col-xs-12">
        <button
          key={key}
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
