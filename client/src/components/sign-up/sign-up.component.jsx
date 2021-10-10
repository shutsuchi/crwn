import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.action';

import { SignUpContainer, SignUpTitle, SignUpButton } from './sign-up.styles';

const SignUp = () => {
  const dispatch = useDispatch();

  const [userCredential, setUserCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredential;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    };

    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = event => {
    const {name, value} = event.target;

    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle className='title'>I do not have a account</SignUpTitle>
      <span>Sign up with your email and passowrd</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='confirm Password'
          required
        />

        <SignUpButton type='submit'>SIGN UP</SignUpButton>

      </form>
    </SignUpContainer>
  );
};

export default SignUp;