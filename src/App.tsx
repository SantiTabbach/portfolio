import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from '@/hooks';
import { LOCALE_OPTIONS } from '../i18n';
import { ThemeConfig } from './theme/Theme';
import { useTheme } from './theme/hooks/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';
import { retrieveLocaleFromStorage } from '@/utils/storage';
import Content from './Content';

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
			<Content theme={theme} themeToggler={themeToggler} />
		</ThemeProvider>
	);
}

export default App;
