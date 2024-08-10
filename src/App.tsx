import { Fragment, useEffect } from 'react';
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
	Container,
	Settings,
} from './components';
import { ThemeConfig } from './theme/Theme';
import { useTheme } from './theme/hooks/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTranslation } from '@/hooks';
import { retrieveLocaleFromStorage } from './utils/storage';
import { LOCALE_OPTIONS } from '../i18n';

const LeftColumn = () => (
	<Fragment>
		<Presentation />
		<WorkExperience />
		<Technologies />
	</Fragment>
);

const RightColumn = () => (
	<Fragment>
		<Projects />
		<MediumPosts />
	</Fragment>
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
			<Container>
				<Header theme={theme} />
				<Settings theme={theme} themeToggler={themeToggler} />
				<LeftColumn />
				<RightColumn />
			</Container>
			<SocialMedia />
		</ThemeProvider>
	);
}

export default App;
