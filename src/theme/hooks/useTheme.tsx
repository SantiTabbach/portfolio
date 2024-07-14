import { useState } from 'react';
import { Theme } from '../../models';
import {
	LS_KEYS,
	persistDataOnStorage,
	retrieveDataFromStorage,
} from '../../utils/storage';

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		(retrieveDataFromStorage(LS_KEYS.THEME) as Theme) ?? Theme.DARK
	);

	const themeToggler = () => {
		const isDarkTheme = theme === Theme.DARK;
		const selectedTheme = isDarkTheme ? Theme.LIGHT : Theme.DARK;
		setTheme(selectedTheme);
		persistDataOnStorage(LS_KEYS.THEME, selectedTheme);
	};

	return { theme, themeToggler };
};
