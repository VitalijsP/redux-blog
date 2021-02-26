import React, { FC } from 'react';

import { UserType } from '../../store/user/type';
import admin from '../assets/images/user-admin.svg';
import user from '../assets/images/user-regular.svg';
import secret from '../assets/images/user-secret.svg';
import { LinkButton } from '../atom/button/link-button/link-button';
import styles from './switch-account.module.scss';

type Props = {
  loggedUser: UserType;
  logoutHandler: () => void;
  registerHandler: () => void;
};

export const SwitchAccount: FC<Props> = ({ registerHandler, logoutHandler, loggedUser }) => {
  return (
    <div className={styles.wrapper}>
      {loggedUser.userType ? (
        <div className={styles.user}>
          <span className={styles.welcomeText}>
            {loggedUser.userName} logged as {loggedUser.userType}!
          </span>
          {loggedUser.userType === 'admin' ? (
            <img src={admin} width="30px" alt="" className={styles.avatar} />
          ) : (
            <img src={user} width="30px" alt="" className={styles.avatar} />
          )}
        </div>
      ) : (
        <div className={styles.user}>
          <span className={styles.welcomeText}>Hello, Stranger!</span>
          <img src={secret} width="30px" alt="" className={styles.avatar} />
        </div>
      )}
      <LinkButton clickHandler={logoutHandler}>{loggedUser.userType ? 'Logout' : 'Login'}</LinkButton>
      {!loggedUser.userType && (
        <LinkButton clickHandler={registerHandler}>Register</LinkButton>
      )}
    </div>
  );
};
