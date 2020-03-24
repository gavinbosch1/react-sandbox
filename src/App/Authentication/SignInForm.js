import React from 'react';
import Form from './components/Form';

const SignInForm = props => {
  return (
    <>
      <Form
        {...props}
        authType="sign-in"
      />
    </>
  );
};

export default SignInForm;
