import { useState } from 'react';
import { Theme } from '../../models';
import {
	persistThemeOnStorage,
	retrieveThemeFromStorage,
} from '../../utils/storage';

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		(retrieveThemeFromStorage() as Theme) ?? Theme.DARK
	);

	const themeToggler = () => {
		const isDarkTheme = theme === Theme.DARK;
		const selectedTheme = isDarkTheme ? Theme.LIGHT : Theme.DARK;
		setTheme(selectedTheme);
		persistThemeOnStorage(selectedTheme);
	};

	return { theme, themeToggler };
};
