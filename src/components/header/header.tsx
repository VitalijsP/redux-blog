import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { RootState } from '../../store/store';
import { logoutUserAction } from '../../store/user/action';
import SwitchAccount from '../switch/switch';

const Header: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/login');
  };

  return (
    <header>
      <div className="container">
        <div className="row margin-bottom--8">
          <div className="col-xs-8 col-xs-offset-2">
            {!loggedUser.userType ? (
              <div className={styles.headerWrapper}>
                <NavLink className={styles.nav_link} to="/home" exact={true}>
                  Home
                </NavLink>
                <NavLink className={styles.nav_link} to="/login">
                  Login
                </NavLink>
                <NavLink className={styles.nav_link} to="/registration">
                  Registration
                </NavLink>
              </div>
            ) : (
              <SwitchAccount
                logoutHandler={logoutHandler}
                loggedUser={loggedUser}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
