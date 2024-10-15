import { EMPTY_STRING, SHORT_MONTHS } from '@/constants';
import { IExperience } from '@/models';
import { differenceInMonths, parseISO } from 'date-fns';

export const getTimeDifference = (
	startDate: string,
	endDate: string
): string => {
	const end =
		endDate.toLowerCase() === 'present' ? new Date() : parseISO(endDate);
	const start = parseISO(startDate);

	const totalMonths = differenceInMonths(end, start);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	let result = EMPTY_STRING;
	if (years > 0) result += `${years} yr${years > 1 ? 's' : EMPTY_STRING}`;
	if (months > 0)
		result += `${years > 0 ? ' ' : EMPTY_STRING}${months} mo${
			months > 1 ? 's' : EMPTY_STRING
		}`;

	return result || '0 mos';
};

export const formatShortDate = (date: string) => {
	if (!RegExp(/(\d{4})-(\d{2})-(\d{2})/).exec(date)) {
		return date;
	}

	const parts = date.split('-');

	const year = parts[0];
	const month = parts[1];

	const parsedMonth = SHORT_MONTHS[parseInt(month) - 1];

	return parsedMonth + ' ' + year;
};

export const getDate = (time: string) => {
	return time.split(' - ');
};

export const calculateFormattedTime = (time: string) => {
	const [start, end] = getDate(time);

	const calcTime = getTimeDifference(start, end);
	return `${formatShortDate(start)} - ${formatShortDate(end)} · ${calcTime}`;
};

export const calculateTotalExperience = (experience: IExperience[]) => {
	const lastExperience = getDate(experience[0].time)[1];
	const firstExperience = getDate(experience[experience.length - 1].time)[0];

	return getTimeDifference(firstExperience, lastExperience);
};
