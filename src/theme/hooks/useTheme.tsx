import { useState } from 'react';
import { THEME } from '@/enums';
import {
	persistThemeOnStorage,
	retrieveThemeFromStorage,
} from '../../utils/storage';

const getCurrentTheme = (): Theme => {
	return (retrieveThemeFromStorage() as Theme) ?? THEME.DARK;
};

const themeMap = {
	[THEME.DARK]: THEME.LIGHT,
	[THEME.LIGHT]: THEME.DARK,
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
