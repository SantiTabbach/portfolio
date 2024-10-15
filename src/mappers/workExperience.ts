import { TFunction } from 'i18next';
import { IExperience } from '@/models';
import { calculateFormattedTime } from '@/utils/time';

export const workExperienceMapper = (
	workExperience: IExperience[],
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
