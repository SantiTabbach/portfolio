import { BaseList, Section } from '@/components';
import ExperienceItem, { IExperienceItem } from './components/ExperienceItem';
import { StyledLine } from './components/StyledExperienceItem';

import useTranslation from '@/hooks/useTranslation';
import { IWorkExperience } from '@/models';
import { workExperienceMapper } from '@/mappers/workExperience';
import { LIST_RESOURCES } from '@/enums';
import { WORK_EXPERIENCE } from '@/constants/workExperience';

const WorkExperience = () => {
	const { t } = useTranslation();

	return (
		<Section title={t('work-experience.title')}>
			<div style={{ position: 'relative' }}>
				<StyledLine />
				<BaseList<IWorkExperience, IExperienceItem>
					items={workExperienceMapper(WORK_EXPERIENCE, t)}
					resourceName={LIST_RESOURCES.experience}
					itemComponent={ExperienceItem}
				/>
			</div>
		</Section>
	);
};

export default WorkExperience;
