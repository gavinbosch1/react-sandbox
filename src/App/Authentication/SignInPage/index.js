import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container';
import Form from '../SignInForm';

const SignInPage = () => {
  const history = useHistory();

  return (
    <>
      <Container>
        <Form
          onAuthentication={() => history.push('/')}
        />
      </Container>
    </>
  );
};

export default SignInPage;
