import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { ThemeProvider } from 'styled-components';
import {
	Technologies,
	MediumPosts,
	WorkExperience,
	Presentation,
	Projects,
	SocialMedia,
	Header,
	Content,
} from './components';
import { ThemeConfig } from './theme/Theme';
import { useTheme } from './theme/hooks/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';
import useTranslation from './hooks/useTranslation';
import { retrieveLocaleFromStorage } from './utils/storage';
import { LOCALE_OPTIONS } from '../i18n';

const LeftColumn = () => (
	<React.Fragment>
		<Presentation />
		<WorkExperience />
		<Technologies />
	</React.Fragment>
);

const RightColumn = () => (
	<React.Fragment>
		<Projects />
		<MediumPosts />
	</React.Fragment>
);

function App() {
	const trackingId = import.meta.env.VITE_TRACKING_ID;
	trackingId && ReactGA.initialize(trackingId);

	ReactGA.send({
		hitType: 'pageview',
		page: '/',
		title: 'App',
	});

	const { theme, themeToggler } = useTheme();

	const { changeLanguage } = useTranslation();

	useEffect(() => {
		changeLanguage(retrieveLocaleFromStorage() ?? LOCALE_OPTIONS.EN);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ThemeProvider theme={ThemeConfig[theme]}>
			<GlobalStyles />
			<Header theme={theme} themeToggler={themeToggler} />
			<Content>
				<LeftColumn />
				<RightColumn />
			</Content>
			<SocialMedia />
		</ThemeProvider>
	);
}

export default App;
