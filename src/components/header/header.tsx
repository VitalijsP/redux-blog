import React, { FC } from 'react';
import NavBar from '../nav-bar/nav-bar';
import Search from '../search/search';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="row middle-xs margin-bottom--50">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row center-xs middle-xs">
              <div className="col-xs-2">
                <img src="logo.svg" width="36px" alt="" />
              </div>
              <div className="col-xs-6">
                <NavBar />
              </div>
              <div className="col-xs-4">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
