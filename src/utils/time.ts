import {
	EMPTY_STRING,
	MONTH_REGEX,
	SHORT_MONTHS,
	YEAR_REGEX,
} from '@/constants';
import { IExperience } from '@/models';

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

export const getElapsedTime = (startDate: string, endDate: string) => {
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

	const mos = months === 1 ? 'mo' : 'mos';
	const yr = years === 1 ? 'yr' : 'yrs';

	if (years === 0) {
		return `${months} ${mos}`;
	} else if (months === 0) {
		return `${years} ${yr}`;
	} else {
		return `${years} ${yr} ${months} ${mos}`;
	}
};

export const calculateFormattedTime = (time: string) => {
	const [start, end] = time.split(' - ');

	const calcTime = getElapsedTime(start, end);
	return `${formatShortDate(start)} - ${formatShortDate(end)} · ${calcTime}`;
};

export const calculateTotalExperience = (experience: IExperience[]) => {
	let totalYears = 0;
	let totalMonths = 0;
	let totalTime = EMPTY_STRING;

	const firstExperience = experience[0];
	const lastExperience = experience[experience.length - 1];

	console.log(firstExperience, lastExperience);

	experience.forEach((e) => {
		const ellapsedTime = e.time.split(' · ')[1];

		const yearMatch = RegExp(YEAR_REGEX).exec(ellapsedTime);
		const monthMatch = RegExp(MONTH_REGEX).exec(ellapsedTime);

		if (yearMatch) totalYears += parseInt(yearMatch[1], 10);
		if (monthMatch) totalMonths += parseInt(monthMatch[1], 10);
	});

	totalYears += Math.floor(totalMonths / 12);
	totalMonths = totalMonths % 12;

	if (totalYears > 0) {
		totalTime = `${totalYears} yr `;
	}
	if (totalMonths > 0) {
		totalTime = `${totalTime}${totalMonths} mos`;
	}

	return totalTime;
};
