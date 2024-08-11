import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Typography } from '@/components';
import { IWorkExperience } from '@/models';
import { Circle, Container, Skill } from './StyledExperienceItem';
import Tags from '@/components/common/baseList/components/components/Tags';
import Summary from './components/Summary';

const { Paragraph, Subtitle } = Typography;

export interface IExperienceItem {
	experience: IWorkExperience;
}

export const ExperienceItem: React.FC<IExperienceItem> = ({ experience }) => {
	const { summary, skills, time, company, title, project } = experience;

	const { t } = useTranslation();
	const { themeStyles } = useTheme();

	return (
		<Container>
			<Circle />
			<Subtitle color={themeStyles.primary} fontSize="16">
				{t(title)} - {t(company)}
			</Subtitle>
			<Paragraph color={themeStyles.subtitle} fontWeight="400" fontSize="14">
				{t(time)}
			</Paragraph>
			<Summary summary={summary} project={project} />
			<Tags tags={skills} renderItem={Skill} />
		</Container>
	);
};

export default ExperienceItem;
