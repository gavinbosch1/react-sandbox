import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({});

const AppWrapper = ({ children }) => {
	return (
		<>
			<MuiThemeProvider theme={theme}>
				{children}
			</MuiThemeProvider>
		</>
	);
};

AppWrapper.propTypes = {
	children: PropTypes.node
};

export default AppWrapper;
