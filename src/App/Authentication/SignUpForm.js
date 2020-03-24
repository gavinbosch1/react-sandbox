import React from 'react';
import Form from './components/Form';

const SignUpForm = props => {
  return (
    <>
      <Form
        {...props}
        authType="sign-up"
      />
    </>
  );
};

export default SignUpForm;
