import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cx from 'classnames';

const theme = createMuiTheme({});

const useStyles = makeStyles(() => ({
  '@global': {
		body: { margin: 0, padding: 0 }
	},
	root: {}
}));

const AppWrapper = ({ children }) => {
	const classes = useStyles();

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<div className={cx(classes.root)}>
					{children}
				</div>
			</MuiThemeProvider>
		</>
	);
};

AppWrapper.propTypes = {
	children: PropTypes.node
};

export default AppWrapper;
