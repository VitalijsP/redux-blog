import React, { FC } from 'react';

import { UserType } from '../../store/user/type';
import admin from '../assets/images/user-admin.svg';
import user from '../assets/images/user-regular.svg';
import secret from '../assets/images/user-secret.svg';
import styles from './switch.module.scss';

type Props = {
  loggedUser: UserType;
  logoutHandler: () => void;
  registerHandler: () => void
};

export const SwitchAccount: FC<Props> = ({ registerHandler, logoutHandler, loggedUser }) => {

  return (
    <div className={styles.userWrapper}>
      {loggedUser.userType ? (
        <div>
          <span>
            {loggedUser.userName} logged as {loggedUser.userType}!
          </span>
          {loggedUser.userType === 'admin' ? (
            <img src={admin} width="30px" alt="" className={styles.avatar} />
          ) : (
            <img src={user} width="30px" alt="" className={styles.avatar} />
          )}
        </div>
      ) : (
        <div>
          <span className={styles.welcomeText}>Hello, stranger!</span>
          <img src={secret} width="30px" alt="" className={styles.avatar} />
        </div>
      )}
      <div>
        <button type="button" className={styles.button} onClick={logoutHandler}>
          {loggedUser.userType ? 'Logout' : 'Login'}
        </button>
      </div>
      {!loggedUser.userType && (
        <div>
          <button type="button" className={styles.button} onClick={registerHandler}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};
