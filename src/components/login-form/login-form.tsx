import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import { RegularButton } from '../atom/button/regular-button/regular-button';
import { Input } from '../atom/input/input';
import styles from './login-form.module.scss';

type Props = {
  emailValue: string;
  passwordValue: string;
  handleEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userSignInHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginForm: FC<Props> = ({
  emailValue,
  passwordValue,
  handleEmailValue,
  handlePasswordValue,
  userSignInHandler,
}) => {
  const history = useHistory();

  return (
    <div className="container container-fluid">
      <div className="row center-xs">
        <div className="col-xs-4">
          <button type="button" className={styles.logoWrapper} onClick={() => history.push('/home')}>
            <img src={logo} width="300px" alt="" />
          </button>
          <form id="login" onSubmit={userSignInHandler}>
            <Input
              type="email"
              id="email"
              value={emailValue}
              placeholder="E-mail"
              inputHandler={(e) => handleEmailValue(e)}
              classProps="loginRegister"
            />
            <Input
              type="password"
              id="password"
              value={passwordValue}
              placeholder="Password"
              inputHandler={(e) => handlePasswordValue(e)}
              classProps="loginRegister"
            />
            <RegularButton type="submit" classProps="w100">
              Sign in
            </RegularButton>
          </form>
          <RegularButton type="button" classProps="w100" actionHandler={() => history.push('/registration')}>
            Registration
          </RegularButton>
          <p>TEST "To login as user" email: vitalijs@gmail.com, pasword: 12345.</p>
          <p>TEST "To login as admin" email: mikus@gmail.com, pasword: qwerty</p>
          <p>*Or create new user, click "Registration"</p>
        </div>
      </div>
    </div>
  );
};
