import { useTranslation } from 'react-i18next';
import { BaseList, Section } from '@/components';
import ExperienceItem, { IExperienceItem } from './components/ExperienceItem';
import { Line } from './components/StyledExperienceItem';

import { IWorkExperience } from '@/models';
import { workExperienceMapper } from '@/mappers/workExperience';
import { LIST_RESOURCES } from '@/enums';
import { WORK_EXPERIENCE } from '@/constants';

const WorkExperience = () => {
	const { t } = useTranslation();

	return (
		<Section title={t('work-experience.title')}>
			<div style={{ position: 'relative' }}>
				<Line />
				<BaseList<IWorkExperience, IExperienceItem>
					items={workExperienceMapper(WORK_EXPERIENCE, t)}
					resourceName={LIST_RESOURCES.experience}
					itemComponent={ExperienceItem}
					keyExtractor={({ title }) => title}
				/>
			</div>
		</Section>
	);
};

export default WorkExperience;
