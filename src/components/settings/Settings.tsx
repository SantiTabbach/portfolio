import { LOCALE_OPTIONS } from '../../../i18n';
import { MoonIcon, SunIcon } from '../../assets/icons/settings';
import useTranslation from '../../hooks/useTranslation';
import { Theme } from '../../models';
import { persistLocaleOnStorage } from '../../utils/storage';
import { Typography } from '../common';
import { StyledSettingsBox, StyledButton } from './StyledSettings';
import { sendLanguageEvent } from '../../utils/analytics';

interface ISettings {
	theme: Theme;
	themeToggler: () => void;
}

const { Paragraph } = Typography;

const Settings: React.FC<ISettings> = ({ theme, themeToggler }) => {
	const { t, changeLanguage } = useTranslation();

	const handleChangeLanguage = () => {
		const currentLanguage = t('language');
		const newLanguage =
			currentLanguage === 'AR' ? LOCALE_OPTIONS.EN : LOCALE_OPTIONS.ES;

		sendLanguageEvent({
			label: `Switch from ${currentLanguage} to ${newLanguage}`,
		});

		changeLanguage(newLanguage);
		persistLocaleOnStorage(newLanguage);
		window.location.reload();
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
