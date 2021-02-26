import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { LoginForm } from '../components/login-form/login-form';
import { loginUserAction } from '../store/user/action';
import { UserType } from '../store/user/type';

export const LoginPage: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordlValue] = useState('');
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordlValue(e.target.value);
  };

  const userSignInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailValue || !passwordValue) {
      // eslint-disable-next-line no-alert
      alert('Some fields are empty!');
      return;
    }
    const localUsers = JSON.parse(localStorage.usersRedux || '[]');

    const validUser = localUsers.find(
      (user: UserType) =>
        user.email === emailValue && user.pasword === passwordValue
    );
    if (validUser) {
      dispatch(loginUserAction(validUser));
      history.push('/home');
      setEmailValue('');
      setPasswordlValue('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Incoret email or password');
    }
  };
  return (
    <div>
      <LoginForm
        emailValue={emailValue}
        passwordValue={passwordValue}
        handleEmailValue={handleEmailValue}
        handlePasswordValue={handlePasswordValue}
        userSignInHandler={(e) => userSignInHandler(e)}
      />
    </div>
  );
};
