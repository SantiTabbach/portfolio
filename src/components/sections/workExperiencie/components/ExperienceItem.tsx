import React from 'react';
import { Link, Typography } from '../../../common';
import { IWorkExperience } from '../../../../models';
import { useTheme } from 'styled-components';
import {
	StyledCircle,
	StyledContainer,
	StyledSkill,
	StyledSummary,
} from './StyledExperienceItem';
import useTranslation from '../../../../hooks/useTranslation';
import Tags from '@/components/common/baseList/components/components/Tags';

const { Paragraph, Subtitle } = Typography;

export interface IExperienceItem {
	experience: IWorkExperience;
}

export const ExperienceItem: React.FC<IExperienceItem> = ({ experience }) => {
	const { summary, skills, time, company, title, project } = experience;

	const { t } = useTranslation();
	const theme = useTheme();

	const splittedSummary = t(summary).split('PROJECT');

	const SummaryLink = ({ text, link }: { text: string; link: string }) => (
		<Link href={link} style={{ fontSize: 14 }}>
			{t(text)}
		</Link>
	);

	return (
		<StyledContainer>
			<StyledCircle />
			<Subtitle color={theme.primary} fontSize="16">
				{t(title)} - {t(company)}
			</Subtitle>
			<Paragraph color={theme.subtitle} fontWeight="400" fontSize="14">
				{t(time)}
			</Paragraph>
			<StyledSummary>
				{splittedSummary[0]}
				{project && <SummaryLink text={project.text} link={project.url} />}
				{splittedSummary?.[1]}
			</StyledSummary>
			<Tags tags={skills} renderItem={StyledSkill} />
		</StyledContainer>
	);
};

export default ExperienceItem;
