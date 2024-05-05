import React from "react";
import { Link, Typography } from "../../../common";
import { IWorkExperience } from "../../../../models";
import { useTheme } from "styled-components";
import {
  StyledCircle,
  StyledContainer,
  StyledSummary,
} from "./StyledExperienceItem";

const { Paragraph, Subtitle } = Typography;

export const ExperienceItem: React.FC<IWorkExperience> = ({
  title,
  company,
  time,
  summary,
  project,
}) => {
  const theme = useTheme();

  const splittedSummary = summary.split("PROJECT");

  const SummaryLink = ({ text, link }: { text: string; link: string }) => (
    <Link href={link} style={{ fontSize: 14 }}>
      {text}
    </Link>
  );

  return (
    <StyledContainer>
      <StyledCircle />
      <Subtitle color={theme.primary} fontSize="16">
        {title} - {company}
      </Subtitle>
      <Paragraph color={theme.subtitle} fontWeight="400" fontSize="14">
        {time}
      </Paragraph>
      <StyledSummary>
        {splittedSummary[0]}
        {project && <SummaryLink text={project.text} link={project.url} />}
        {splittedSummary[1] && splittedSummary[1]}
      </StyledSummary>
    </StyledContainer>
  );
};

export default ExperienceItem;
