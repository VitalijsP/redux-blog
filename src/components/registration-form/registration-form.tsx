import React, { FC } from 'react';
import styles from '../login-form/login-form.module.scss';
import logo from '../../images/logo.png';

type Props = {
  emailValue: string;
  nameValue: string;
  passwordValue: string;
  password2Value: string;
  handleEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNameValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword2Value: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userRegisterHandler: () => void;
};

const RegistrationForm: FC<Props> = ({
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
  return (
    <section>
      <div className="container">
        <div className="row margin-bottom--16">
          <div className="col-xs-4 col-xs-offset-4">
            <div className={styles.logo_wrapper}>
              <img src={logo} width="300px" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <form action="">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={emailValue}
                onChange={(e) => handleEmailValue(e)}
              />
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className={styles.input}
                value={nameValue}
                onChange={(e) => handleNameValue(e)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={passwordValue}
                onChange={(e) => handlePasswordValue(e)}
              />
              <label htmlFor="password2">Repeat password:</label>
              <input
                type="password"
                id="password2"
                className={styles.input}
                value={password2Value}
                onChange={(e) => handlePassword2Value(e)}
              />
            </form>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                userRegisterHandler();
              }}
            >
              Sign up
            </button>
          </div>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                rem nostrum autem dicta quas et suscipit tempora cum dignissimos
                eum, non aperiam amet hic beatae consequatur veniam quibusdam,
                maxime necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
