import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import copy from '@/constants/authCopy';
import cx from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import * as api from '@/api/auth';
import WindowEventListener from '@/components/WindowEventListener';
import { useAppContext } from '@/contexts/App';

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    textAlign: 'center',
  },
  footer: {
    textAlign: 'right'
  }
}));


const Form = ({ authType, onAuthentication }) => {
  const [, { setAuthenticatedUser }] = useAppContext();

  const [authError, setAuthError] = useState(null);
  const [authenticating, setAuthenticating] = useState(false);

  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [p2, setP2] = useState('');

  const title = authType === 'sign-up' ? copy.SIGN_UP_TITLE : copy.SIGN_IN_TITLE;

  const classes = useStyles();

  const formIsComplete = () => u && p && (authType === 'sign-up' ? p2 : true);

  const authenticate = () => {
    if (authenticating || !formIsComplete()) return;

    setAuthError(null);
    setAuthenticating(true);

    api[authType === 'sign-up' ? 'signUp' : 'signIn']({
      username: u,
      password: p,
      password2: p2
    }).then(data => {
      setAuthenticating(false);
      setAuthenticatedUser(data.user);
      if (onAuthentication) onAuthentication(data.user);
    })
      .catch(e => {
        setAuthenticating(false);
        setAuthError(e);
      });
  };

  return (
    <>
      <WindowEventListener
        events={{ keyup: e => e.keyCode === 13 && authenticate() }}
      >
        <div className={classes.header}>
          <Logo />

          <br />

          <Typography
            variant="h4"
            className={cx(classes.title)}
          >{title}</Typography>
        </div>

        <br />

        <TextField
          fullWidth
          type="email"
          name="username"
          value={u}
          label={copy.USERNAME_LABEL}
          onChange={e => setU(e.target.value)}
        />

        <br /><br />

        <TextField
          fullWidth
          name="password"
          type="password"
          value={p}
          label={copy.PASSWORD_LABEL}
          onChange={e => setP(e.target.value)}
        />

        <br /><br />

        {authType === 'sign-up' && (
          <>
            <TextField
              fullWidth
              name="password2"
              type="password"
              value={p2}
              label={copy.CONFIRM_PASSWORD_LABEL}
              onChange={e => setP2(e.target.value)}
            />

            <br /><br />
          </>
        )}

        <div className={cx(classes.footer)}>
          {!authError ? null : (
            <p><Typography color="error" variant="caption">{authError.msg || authError.message || JSON.stringify(authError)}</Typography></p>
          )}

          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={authenticating || !formIsComplete()}
              onClick={() => authenticate()}
            >{authenticating ? copy.AUTHENTICATING_MSG : title}</Button>
          </div>

          <p>
            <Typography variant="caption">{copy[authType === 'sign-up' ? 'CALL_TO_SIGN_IN' : 'CALL_TO_SIGN_UP']}</Typography>&nbsp;
            <Typography variant="caption">
              <Link to={authType === 'sign-up' ? '/sign-in' : '/sign-up'}>
                {copy[authType === 'sign-up' ? 'SIGN_IN_TITLE' : 'SIGN_UP_TITLE']}
              </Link>
            </Typography>
          </p>
        </div>
      </WindowEventListener>
    </>
  );
};

Form.propTypes = {
  authType: PropTypes.oneOf(['sign-in', 'sign-up']),
  onAuthentication: PropTypes.func
};

export default Form;
