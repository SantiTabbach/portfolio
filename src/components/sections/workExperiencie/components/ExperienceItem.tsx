import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Typography } from '@/components';
import { IExperience } from '@/models';
import Tags from '@/components/common/baseList/components/components/Tags';
import { Circle, Container, Skill } from './StyledExperienceItem';
import Summary from './components/Summary';
import DomainComponent from './components/Domain';

const { Paragraph, Subtitle } = Typography;

export interface IExperienceItem {
	experience: IExperience;
}

export const ExperienceItem: React.FC<IExperienceItem> = ({ experience }) => {
	const { summary, skills, time, title, project } = experience;

	const { themeStyles } = useTheme();

	return (
		<Container>
			<Circle />
			<Subtitle color={themeStyles.primary} fontSize="16">
				{title}
			</Subtitle>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<Paragraph color={themeStyles.subtitle} fontWeight="400" fontSize="14">
					{time}
				</Paragraph>
				<DomainComponent domain={experience.domain} />
			</div>

			<Summary summary={summary} project={project} />
			<Tags tags={skills} renderItem={Skill} />
		</Container>
	);
};

export default ExperienceItem;
