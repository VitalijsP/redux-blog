import React, { FC } from 'react';

import styles from './regularButton.module.scss';

type Props = {
  type: 'submit' | 'button';
  label: string;
  actionHandler?: () => void;
  classProps?: string;
};

export const RegularButton: FC<Props> = ({ children, classProps, type, label, actionHandler }) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${styles.button} ${classProps}`}
      onClick={actionHandler}
    >
      <span>{label}</span>
    </button>
  );
};
