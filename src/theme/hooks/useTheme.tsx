import { useState } from 'react';
import { Theme } from '../../models';
import {
	persistThemeOnStorage,
	retrieveThemeFromStorage,
} from '../../utils/storage';

const getCurrentTheme = (): Theme => {
	return (retrieveThemeFromStorage() as Theme) ?? Theme.DARK;
};

const themeMap = {
	[Theme.DARK]: Theme.LIGHT,
	[Theme.LIGHT]: Theme.DARK,
};

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(getCurrentTheme);

	const themeToggler = () => {
		const selectedTheme = themeMap[theme];
		setTheme(selectedTheme);
		persistThemeOnStorage(selectedTheme);
	};

	return { theme, themeToggler };
};
