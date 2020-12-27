import React from 'react';
import styles from '../login-form/login-form.module.scss';
import logo from '../../images/logo.svg';

const RegistrationForm = () => {
  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--16">
          <div className="col-xs-8 col-xs-offset-2">
            <img src={logo} width="160px" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <form action="">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="e-mail adress"
              />
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="Username"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="password"
              />
              <label htmlFor="password">Repeat password:</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Repeat password"
              />
              <button className={styles.button} type="submit">
                Sign up
              </button>
            </form>
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
