import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../../store/store';
import { logoutUserAction } from '../../../store/user/action';
import { SwitchAccount } from '../../switch/switch-account';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/login');
  };

  const registerHandler = () => {
    history.push('/registration');
  };

  return (
    <header>
      <div className="container container-fluid">
        <div className="row middle-xs">
          <div className="col-xs-6">FUTURE LOGO</div>
          <div className="col-xs-6">
            <SwitchAccount registerHandler={registerHandler} logoutHandler={logoutHandler} loggedUser={loggedUser} />
          </div>
        </div>
      </div>
    </header>
  );
};
