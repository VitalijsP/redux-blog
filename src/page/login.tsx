import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/login-form/login-form';
import { UserType } from '../data/users';
import { loginUserAction } from '../store/user/action';

const Login: FC = () => {
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

  const userSignInHandler = () => {
    if (!emailValue || !passwordValue) {
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
        userSignInHandler={() => userSignInHandler()}
      />
    </div>
  );
};

export default Login;
