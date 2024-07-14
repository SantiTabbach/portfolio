import { useTranslation as useT } from 'react-i18next';

const useTranslation = () => {
	const { t, i18n } = useT();

	const changeLanguage = (lng: string | undefined) => {
		i18n.changeLanguage(lng);
	};

	return { t, changeLanguage };
};

export default useTranslation;
