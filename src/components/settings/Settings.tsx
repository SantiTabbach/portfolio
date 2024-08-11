import { useTranslation } from 'react-i18next';
import { MoonIcon, SunIcon } from '@/assets/icons/settings';
import { useChangeLanguage } from '@/hooks';
import { THEME } from '@/enums';
import { Typography } from '@/components';
import { Container, Button } from './StyledSettings';
import { useTheme } from '@/theme/hooks/useTheme';

const { Paragraph } = Typography;

const themeIcon = {
	[THEME.LIGHT]: SunIcon,
	[THEME.DARK]: MoonIcon,
};

const Settings: React.FC = () => {
	const { theme, themeToggler } = useTheme();
	const { t } = useTranslation();
	const { handleChangeLanguage } = useChangeLanguage();

	const ThemeIcon = themeIcon[theme];

	return (
		<Container>
			<Button onClick={themeToggler} aria-label="theme switch">
				<ThemeIcon />
			</Button>
			<Button onClick={handleChangeLanguage}>
				<Paragraph>{t('language')}</Paragraph>
			</Button>
		</Container>
	);
};

export default Settings;
