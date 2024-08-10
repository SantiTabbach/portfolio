import { BaseList, Section } from '../../common';
import ExperienceItem, { IExperienceItem } from './components/ExperienceItem';
import { StyledLine } from './components/StyledExperienceItem';
import { WORK_EXPERIENCE } from './consts';
import useTranslation from '../../../hooks/useTranslation';
import { IWorkExperience } from '../../../models';
import { workExperienceMapper } from '../../../mappers/workExperience';

const WorkExperience = () => {
	const { t } = useTranslation();

	return (
		<Section title={t('work-experience.title')}>
			<div style={{ position: 'relative' }}>
				<StyledLine />
				<BaseList<IWorkExperience, IExperienceItem>
					items={workExperienceMapper(WORK_EXPERIENCE, t)}
					resourceName="experience"
					itemComponent={ExperienceItem}
				/>
			</div>
		</Section>
	);
};

export default WorkExperience;
