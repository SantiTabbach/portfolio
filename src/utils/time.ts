import { TFunction } from 'i18next';
import { SHORT_MONTHS } from '../consts';

export const formatShortDate = (date: string) => {
	if (!date.match(/(\d{4})-(\d{2})-(\d{2})/)) {
		return date;
	}

	const parts = date.split('-');

	const year = parts[0];
	const month = parts[1];

	const parsedMonth = SHORT_MONTHS[parseInt(month) - 1];

	return parsedMonth + ' ' + year;
};

export const getElapsedTime = (
	startDate: string,
	endDate: string,
	t: TFunction<'translation', undefined>
) => {
	const start = new Date(startDate);
	const end = ['Present', 'Presente'].includes(endDate)
		? new Date()
		: new Date(endDate);

	const diffMonths =
		(end.getFullYear() - start.getFullYear()) * 12 +
		end.getMonth() -
		start.getMonth();

	const years = Math.floor(diffMonths / 12);
	const months = diffMonths % 12;

	const mos = months === 1 ? t('time.mo') : t('time.mos');
	const yr = years === 1 ? t('time.yr') : t('time.yrs');

	if (years === 0) {
		return `${months} ${mos}`;
	} else if (months === 0) {
		return `${years} ${yr}`;
	} else {
		return `${years} ${yr} ${months} ${mos}`;
	}
};

export const calculateFormattedTime = (
	time: string,
	t: TFunction<'translation', undefined>
) => {
	const [start, end] = time.split(' - ');

	const calcTime = getElapsedTime(start, end, t);
	return `${formatShortDate(start)} - ${formatShortDate(end)} · ${calcTime}`;
};
