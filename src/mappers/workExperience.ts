import { IExperience } from '@/models';
import { calculateFormattedTime } from '@/utils/time';

export const workExperienceMapper = (workExperience: IExperience[]) => {
	return workExperience.map((item) => {
		const { time, ...rest } = item;
		const formattedTime = calculateFormattedTime(time);

		return {
			...rest,
			time: formattedTime,
		};
	});
};
