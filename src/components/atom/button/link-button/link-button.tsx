import React, { FC } from 'react';

import styles from './link-button.module.scss';

type Props = {
  label?: string;
  clickHandler: () => void;
};

export const LinkButton: FC<Props> = ({ children, label, clickHandler }) => {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.linkButton} onClick={clickHandler}>
        {label === 'filter' && '# '}
        {children}
      </button>
    </div>
  );
};
