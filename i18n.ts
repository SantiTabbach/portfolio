import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

export const LOCALE_OPTIONS = {
	EN: 'en',
	ES: 'es',
};

const resources = {
	[LOCALE_OPTIONS.EN]: {
		translation: translationEN,
	},
	[LOCALE_OPTIONS.ES]: {
		translation: translationES,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: LOCALE_OPTIONS.EN,
		fallbackLng: LOCALE_OPTIONS.EN,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
