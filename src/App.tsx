import React, { useEffect } from 'react';
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
import { LS_KEYS, retrieveDataFromStorage } from './utils/storage';
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
	const { theme, themeToggler } = useTheme();

	const { changeLanguage } = useTranslation();

	useEffect(() => {
		changeLanguage(
			retrieveDataFromStorage(LS_KEYS.LOCALE) ?? LOCALE_OPTIONS.EN
		);
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
