import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RegistrationForm } from '../components/registration-form/registration-form';
import { UserType } from '../data/users';

export const Registration: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordlValue] = useState('');
  const [password2Value, setPassword2lValue] = useState('');
  const history = useHistory();

  const handleEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handleNameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordlValue(e.target.value);
  };
  const handlePassword2Value = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2lValue(e.target.value);
  };

  const userRegisterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordValue !== password2Value) {
      // eslint-disable-next-line no-alert
      alert('Password does not match!');
      return;
    }

    const newUser: UserType = {
      email: emailValue,
      userName: nameValue,
      pasword: passwordValue,
      userType: 'user',
    };
    const localUsers = JSON.parse(localStorage.usersRedux || '[]');
    localUsers.push(newUser);
    localStorage.usersRedux = JSON.stringify(localUsers);

    setEmailValue('');
    setNameValue('');
    setPasswordlValue('');
    setPassword2lValue('');
    history.push('/home');
  };
  
  return (
    <div>
      <RegistrationForm
        emailValue={emailValue}
        nameValue={nameValue}
        passwordValue={passwordValue}
        password2Value={password2Value}
        handleEmailValue={handleEmailValue}
        handleNameValue={handleNameValue}
        handlePasswordValue={handlePasswordValue}
        handlePassword2Value={handlePassword2Value}
        userRegisterHandler={userRegisterHandler}
      />
    </div>
  );
};
