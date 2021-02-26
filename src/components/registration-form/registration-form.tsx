import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import { RegularButton } from '../atom/button/regular-button/regular-button';
import { Image } from '../atom/image/image';
import { Input } from '../atom/input/input';
import styles from '../login-form/login-form.module.scss';

type Props = {
  emailValue: string;
  nameValue: string;
  passwordValue: string;
  password2Value: string;
  handleEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNameValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword2Value: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userRegisterHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const RegistrationForm: FC<Props> = ({
  emailValue,
  nameValue,
  passwordValue,
  password2Value,
  handleEmailValue,
  handleNameValue,
  handlePasswordValue,
  handlePassword2Value,
  userRegisterHandler,
}) => {
  const history = useHistory();

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <Image link={logo} width={300} height={168} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <form id="registration" onSubmit={userRegisterHandler}>
              <Input
                type="email"
                id="email"
                value={emailValue}
                placeholder="Email"
                inputHandler={(e) => handleEmailValue(e)}
              />
              <Input
                type="text"
                id="username"
                placeholder="Username"
                value={nameValue}
                inputHandler={(e) => handleNameValue(e)}
              />
              <Input
                type="password"
                id="password"
                value={passwordValue}
                placeholder="Password"
                inputHandler={(e) => handlePasswordValue(e)}
              />
              <Input
                type="password"
                id="password2"
                value={password2Value}
                placeholder="Repeat password"
                inputHandler={(e) => handlePassword2Value(e)}
              />
              <RegularButton type="submit" classProps="w100">
                Register
              </RegularButton>
            </form>
            <RegularButton type="button" classProps="w100" actionHandler={() => history.push('/login')}>
              Sign in
            </RegularButton>
          </div>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem nostrum autem dicta quas et suscipit
                tempora cum dignissimos eum, non aperiam amet hic beatae consequatur veniam quibusdam, maxime
                necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
