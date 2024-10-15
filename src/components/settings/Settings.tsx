import { MoonIcon, SunIcon } from '@/assets/icons/settings';
import { THEME } from '@/enums';
import { Container, Button } from './StyledSettings';
import { useTheme } from '@/contexts/ThemeContext';

const themeIcon = {
	[THEME.LIGHT]: SunIcon,
	[THEME.DARK]: MoonIcon,
};

const Settings: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	const ThemeIcon = themeIcon[theme];

	return (
		<Container>
			<Button onClick={toggleTheme} aria-label="theme switch">
				<ThemeIcon />
			</Button>
		</Container>
	);
};

export default Settings;
