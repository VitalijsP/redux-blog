import React, { FC, useState } from 'react';
import RegistrationForm from '../components/registration-form/registration-form';

const Registration: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordlValue] = useState('');
  const [password2Value, setPassword2lValue] = useState('');

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

  const userRegisterHandler = () => {
    if (!emailValue || !nameValue || !passwordValue || !password2Value) {
      alert('Some fields are empty!');
      return;
    }
    console.log(emailValue, nameValue, passwordValue, password2Value);
    setEmailValue('');
    setNameValue('');
    setPasswordlValue('');
    setPassword2lValue('');
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

export default Registration;
