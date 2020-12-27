import React from 'react';
import styles from './login-form.module.scss';
import logo from '../../images/logo.svg';

const LoginForm = () => {
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
              <input
                type="email"
                id="username"
                className={styles.input}
                placeholder="e-mail adress"
              />
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="password"
              />
              <button className={styles.button} type="submit">
                Log in
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

export default LoginForm;
