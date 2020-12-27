import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-bar.module.scss';

const NavBar: FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav_link} activeClassName="selected" to="/login">
        Login
      </NavLink>
      <NavLink className={styles.nav_link} activeClassName="selected" to="/home" exact={true}>
        Home
      </NavLink>
    </nav>
  );
};

export default NavBar;
