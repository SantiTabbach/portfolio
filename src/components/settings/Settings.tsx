import { MoonIcon, SunIcon } from '../../assets/icons/settings';
import useTranslation from '../../hooks/useTranslation';
import { Theme } from '../../models';
import { Typography } from '../common';
import { StyledSettingsBox, StyledButton } from './StyledSettings';

interface ISettings {
	theme: Theme;
	themeToggler: () => void;
}

const { Paragraph } = Typography;

const Settings: React.FC<ISettings> = ({ theme, themeToggler }) => {
	const { t, changeLanguage } = useTranslation();

	const handleChangeLanguage = () => {
		if (t('language') === 'AR') {
			changeLanguage('en');
		} else {
			changeLanguage('es');
		}
	};

	return (
		<StyledSettingsBox>
			<StyledButton onClick={themeToggler} aria-label="theme switch">
				{theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
			</StyledButton>
			<StyledButton onClick={handleChangeLanguage}>
				<Paragraph>{t('language')}</Paragraph>
			</StyledButton>
		</StyledSettingsBox>
	);
};

export default Settings;
