import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import { RegularButton } from '../atom/button/regularButton/regularButton';
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
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-4">
            <button type="button" className={styles.logoWrapper} onClick={() => history.push('/home')}>
              <img src={logo} width="300px" alt="" />
            </button>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-4">
            <form onSubmit={userSignInHandler}>
              <Input
                type="email"
                id="email"
                value={emailValue}
                placeholder="E-mail"
                inputHandler={(e) => handleEmailValue(e)}
              />
              <Input
                type="password"
                id="password"
                value={passwordValue}
                placeholder="Password"
                inputHandler={(e) => handlePasswordValue(e)}
              />
              <RegularButton label="Sign in" type="submit" classProps="w100" />
            </form>
            <RegularButton
              label="Registration"
              type="button"
              classProps="w100"
              actionHandler={() => history.push('/registration')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
