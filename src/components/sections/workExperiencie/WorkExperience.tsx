import { BaseList, Section, Typography } from '@/components';
import ExperienceItem, { IExperienceItem } from './components/ExperienceItem';
import { Line } from './components/StyledExperienceItem';
import { IExperience, IWorkExperience } from '@/models';
import { workExperienceMapper } from '@/mappers/workExperience';
import { LIST_RESOURCES } from '@/enums';
import { WORK_EXPERIENCE } from '@/constants';
import { useTheme } from '@/contexts/ThemeContext';
import { calculateTotalExperience } from '@/utils/time';

const { Paragraph } = Typography;

const WorkExperience = () => {
	const { themeStyles } = useTheme();

	return (
		<Section title="Work experience">
			{WORK_EXPERIENCE.map((e: IWorkExperience) => {
				const items = workExperienceMapper(e.experience);

				return (
					<div key={e.company} style={{ marginBottom: 50 }}>
						<Paragraph
							color={themeStyles.subtitle}
							fontWeight="400"
							fontSize="14"
						>
							{e.company} · {calculateTotalExperience(e.experience)}
						</Paragraph>
						<div style={{ position: 'relative' }}>
							<Line />
							<BaseList<IExperience, IExperienceItem>
								items={items}
								resourceName={LIST_RESOURCES.experience}
								itemComponent={ExperienceItem}
								keyExtractor={({ title }) => title}
							/>
						</div>
					</div>
				);
			})}
		</Section>
	);
};

export default WorkExperience;
