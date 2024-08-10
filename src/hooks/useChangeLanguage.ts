import { useCallback } from 'react';
import useTranslation from './useTranslation';
import { sendLanguageEvent } from '@/utils/analytics';
import { persistLocaleOnStorage } from '@/utils/storage';
import { LOCALE_OPTIONS } from '../../i18n';

const useChangeLanguage = () => {
	const { t, changeLanguage } = useTranslation();

	const handleChangeLanguage = useCallback(() => {
		const currentLanguage = t('language');
		const newLanguage =
			currentLanguage === 'AR' ? LOCALE_OPTIONS.EN : LOCALE_OPTIONS.ES;

		sendLanguageEvent({
			label: `Switch from ${currentLanguage} to ${newLanguage}`,
		});

		changeLanguage(newLanguage);
		persistLocaleOnStorage(newLanguage);
		window.location.reload();
	}, [changeLanguage, t]);

	return { handleChangeLanguage };
};

export default useChangeLanguage;
