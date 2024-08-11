import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import { useTranslation } from '@/hooks';
import { LOCALE_OPTIONS } from '../i18n';

import { GlobalStyles } from './theme/GlobalStyles';
import { retrieveLocaleFromStorage } from '@/utils/storage';
import {
	Header,
	Main,
	MediumPosts,
	Pane,
	Presentation,
	Projects,
	Santi,
	Settings,
	SocialMedia,
	Technologies,
	WorkExperience,
} from './components';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
	const trackingId = import.meta.env.VITE_TRACKING_ID;
	trackingId && ReactGA.initialize(trackingId);

	ReactGA.send({
		hitType: 'pageview',
		page: '/',
		title: 'App',
	});

	const { changeLanguage } = useTranslation();

	useEffect(() => {
		changeLanguage(retrieveLocaleFromStorage() ?? LOCALE_OPTIONS.EN);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ThemeProvider>
			<GlobalStyles />
			<Header>
				<Santi />
				<Settings />
			</Header>
			<Main>
				<Pane>
					<Presentation />
					<WorkExperience />
					<Technologies />
				</Pane>
				<Pane>
					<Projects />
					<MediumPosts />
				</Pane>
			</Main>
			<SocialMedia />
		</ThemeProvider>
	);
}

export default App;
