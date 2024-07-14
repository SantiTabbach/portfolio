import { LOCALE_OPTIONS } from '../../../i18n';
import { MoonIcon, SunIcon } from '../../assets/icons/settings';
import useTranslation from '../../hooks/useTranslation';
import { Theme } from '../../models';
import { LS_KEYS, persistDataOnStorage } from '../../utils/storage';
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
			changeLanguage(LOCALE_OPTIONS.EN);
			persistDataOnStorage(LS_KEYS.LOCALE, LOCALE_OPTIONS.EN);
		} else {
			changeLanguage(LOCALE_OPTIONS.ES);
			persistDataOnStorage(LS_KEYS.LOCALE, LOCALE_OPTIONS.ES);
		}
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
