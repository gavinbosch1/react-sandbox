import React, { useState } from 'react';
import AppContext from '@/contexts/App';
import { Switch, Route, Redirect } from 'react-router-dom';
import LazyComponent from '@/components/LazyComponent';
import PageLoader from '@/components/PageLoader';
import PageLoadError from '@/components/PageLoadError';
import AppWrapper from '@/components/AppWrapper';
import Helmet from 'react-helmet';

const loadPageOpts = { LoaderComponent: PageLoader, ErrorComponent: PageLoadError };

const HomePage = LazyComponent(() => import('./HomePage'), loadPageOpts);
const PostsPage = LazyComponent(() => import('./PostsPage'), loadPageOpts);
const SinglePostPage = LazyComponent(() => import('./SinglePostPage'), loadPageOpts);
const FourZeroFourPage = LazyComponent(() => import('./FourZeroFourPage'), loadPageOpts);
const SignInPage = LazyComponent(() => import('./AuthPages/SignInPage'), loadPageOpts);
const SignUpPage = LazyComponent(() => import('./AuthPages/SignUpPage'), loadPageOpts);

const App = () => {
	const [appInitialised, setAppInitStatus] = useState(false);
	const [appDetails, setAppDetails] = useState({ title: 'React Sandbox' });
	const [authenticatedUser, setAuthenticatedUser] = useState(null);

	const appState = { authenticatedUser, appInitialised, appDetails };
	const appStateActions = { setAuthenticatedUser, setAppInitStatus, setAppDetails };

	return (
		<>
			<Helmet>
				<title>{appDetails.title}</title>
			</Helmet>

			<AppContext.Provider value={[appState, appStateActions]}>
				<AppWrapper>
					{authenticatedUser ?
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/posts" component={PostsPage} />
							<Route exact path="/posts/:postId" component={SinglePostPage} />
							<Route path="*" component={FourZeroFourPage} />
						</Switch>
						:
						<Switch>
							<Route exact path="/sign-in" component={SignInPage} />
							<Route exact path="/sign-up" component={SignUpPage} />
							<Route path="*" render={() => <Redirect to="/sign-in" />} />
						</Switch>}
				</AppWrapper>
			</AppContext.Provider>
		</>
	);
};

export default props => (
	<>
		<Helmet>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
		</Helmet>

		<App {...props} />
	</>
);
