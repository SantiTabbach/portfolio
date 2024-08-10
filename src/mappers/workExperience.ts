import { TFunction } from 'i18next';
import { IWorkExperience } from '../models';
import { calculateFormattedTime } from '../utils/time';

export const workExperienceMapper = (
	workExperience: IWorkExperience[],
	t: TFunction<'translation', undefined>
) => {
	return workExperience.map((item) => {
		const { time, ...rest } = item;
		const formattedTime = calculateFormattedTime(t(time), t);

		return {
			...rest,
			time: formattedTime,
		};
	});
};
