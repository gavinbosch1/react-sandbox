/* global window */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import WindowEventListener from '@/components/WindowEventListener';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: props => ({
    minHeight: props.height,
    width: props.width,
    display: 'flex',
  }),
  inner: {
    margin: 'auto',
    width: '90%',
    maxWidth: 400
  }
}));

const Container = ({ className, children }) => {
  const getDimensions = () => ({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [dimensions, setDimensions] = useState(getDimensions);

  const classes = useStyles(dimensions);

  return (
    <>
      <WindowEventListener
        events={{ resize: () => setDimensions(getDimensions) }}
      >
        <div className={cx(className, classes.root)}>
          <div className={cx(classes.inner)}>
            {children}
          </div>
        </div>
      </WindowEventListener>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
