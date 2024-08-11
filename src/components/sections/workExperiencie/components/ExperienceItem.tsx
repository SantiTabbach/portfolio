import React from 'react';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
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
	const theme = useTheme();

	return (
		<Container>
			<Circle />
			<Subtitle color={theme.primary} fontSize="16">
				{t(title)} - {t(company)}
			</Subtitle>
			<Paragraph color={theme.subtitle} fontWeight="400" fontSize="14">
				{t(time)}
			</Paragraph>
			<Summary summary={summary} project={project} />
			<Tags tags={skills} renderItem={Skill} />
		</Container>
	);
};

export default ExperienceItem;
