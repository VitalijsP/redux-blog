import React, { FC, useState } from 'react';
import styles from './login-form.module.scss';
import logo from '../../images/logo.png';

type Props = {
  emailValue: string;
  passwordValue: string;
  handleEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userSignInHandler: () => void;
};

const LoginForm: FC<Props> = ({
  emailValue,
  passwordValue,
  handleEmailValue,
  handlePasswordValue,
  userSignInHandler,
}) => {
  return (
    <section>
      <div className="container">
        <div className="row middle-xs margin-bottom--16">
          <div className="col-xs-2 col-xs-offset-5">
            <div className={styles.logo_wrapper}>
              <img src={logo} width="300px" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <form action="">
              <input
                type="email"
                id="email"
                value={emailValue}
                className={styles.input}
                placeholder="Email"
                onChange={(e) => handleEmailValue(e)}
              />
              <input
                type="password"
                id="password"
                value={passwordValue}
                className={styles.input}
                placeholder="Password"
                onChange={(e) => handlePasswordValue(e)}
              />
            </form>
            <button
              type="button"
              className={styles.button}
              onClick={userSignInHandler}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
