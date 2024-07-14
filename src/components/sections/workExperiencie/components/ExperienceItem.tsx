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
import { StyledFooterContainer } from '../../../common/baseList/components/StyledBaseListElement';
import useTranslation from '../../../../hooks/useTranslation';

const { Paragraph, Subtitle } = Typography;

export const ExperienceItem: React.FC<IWorkExperience> = ({
	title,
	company,
	time,
	summary,
	project,
	skills,
}) => {
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
				{splittedSummary[1] && splittedSummary[1]}
			</StyledSummary>
			<StyledFooterContainer>
				{skills.map((skill) => (
					<StyledSkill key={skill}>{skill}</StyledSkill>
				))}
			</StyledFooterContainer>
		</StyledContainer>
	);
};

export default ExperienceItem;
