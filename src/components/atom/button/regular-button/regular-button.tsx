import React, { FC } from 'react';

import styles from './regular-button.module.scss';

type Props = {
  type: 'submit' | 'button';
  actionHandler?: () => void;
  classProps?: string;
};

export const RegularButton: FC<Props> = ({ children, classProps, type, actionHandler }) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${styles.button} ${classProps}`}
      onClick={actionHandler}
    >
      {children}
    </button>
  );
};
