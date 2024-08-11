import React, {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { THEME } from '@/enums';
import { ThemeConfig } from '@/theme/Theme';
import {
	persistThemeOnStorage,
	retrieveThemeFromStorage,
} from '@/utils/storage';

interface ThemeContextType {
	theme: THEME;
	toggleTheme: () => void;
	themeStyles: (typeof ThemeConfig)[THEME];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<THEME>(THEME.LIGHT);

	useEffect(() => {
		const savedTheme = (retrieveThemeFromStorage() as THEME) || THEME.LIGHT;
		setTheme(savedTheme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		setTheme(newTheme);
		persistThemeOnStorage(newTheme);
	};

	const themeStyles = ThemeConfig[theme];

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
			<StyledThemeProvider theme={ThemeConfig[theme]}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
