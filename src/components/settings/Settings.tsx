import { useTranslation } from 'react-i18next';
import { MoonIcon, SunIcon } from '@/assets/icons/settings';
import { useChangeLanguage } from '@/hooks';
import { THEME } from '@/enums';
import { Typography } from '@/components';
import { Container, Button } from './StyledSettings';

const { Paragraph } = Typography;
interface ISettings {
	theme: THEME;
	themeToggler: () => void;
}

const themeIcon = {
	[THEME.LIGHT]: SunIcon,
	[THEME.DARK]: MoonIcon,
};

const Settings: React.FC<ISettings> = ({ theme, themeToggler }) => {
	const ThemeIcon = themeIcon[theme];

	const { t } = useTranslation();
	const { handleChangeLanguage } = useChangeLanguage();

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
