import React, { FC } from 'react';
import styles from './switch.module.scss';
import admin from '../../images/user-admin.svg';
import user from '../../images/user-regular.svg';
import secret from '../../images/user-secret.svg';
import { UserType } from '../../store/user/type';

type Props = {
  loggedUser: UserType;
  logoutHandler: () => void;
};

const SwitchAccount: FC<Props> = ({ logoutHandler, loggedUser }) => {
  console.log('loggedUser:', loggedUser);

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
          <button
            type="button"
            className={styles.button}
            onClick={logoutHandler}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default SwitchAccount;
