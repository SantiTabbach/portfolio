import { MoonIcon, SunIcon } from '@/assets/icons/settings';
import { useChangeLanguage, useTranslation } from '@/hooks';
import { Theme } from '@/models';
import { Typography } from '../common';
import { Container, Button } from './StyledSettings';

const { Paragraph } = Typography;
interface ISettings {
	theme: Theme;
	themeToggler: () => void;
}

const themeIcon = {
	[Theme.LIGHT]: SunIcon,
	[Theme.DARK]: MoonIcon,
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
