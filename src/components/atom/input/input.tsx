import React, { FC } from 'react';

import styles from './input.module.scss';

type Props = {
  type: string;
  id?: string;
  placeholder: string;
  value: string;
  required?: boolean;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ type, id, placeholder, value, required = false, inputHandler }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        id={id}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => inputHandler(e)}
        required={required}
      />
    </div>
  );
};
