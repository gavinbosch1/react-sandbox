import React from 'react';
import { useAppContext } from '@/contexts/App';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const PostsPage = () => {
  const [{ authenticatedUser }] = useAppContext();

  return (
    <>
      <Logo />

      <br />

      <Typography variant="caption">Logged in as: {authenticatedUser.name} {authenticatedUser.lastname}</Typography>

      <br />

      <Typography variant="h4">Posts page</Typography>

      <br />

      <Link to="/">Home</Link>
    </>
  );
};

export default PostsPage;
