import React from "react";
import { Typography } from "../../common";
import { IWorkExperience } from "../../../models";
import { useTheme } from "styled-components";
import {
  StyledCircle,
  StyledContainer,
  StyledSummary,
} from "./StyledExperienceItem";
import { StyledLink } from "../../commonStyled";

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

  const Link = ({ text, link }: { text: string; link: string }) => (
    <StyledLink href={link} target="_blank" style={{ fontSize: 14 }}>
      {text}
    </StyledLink>
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
        {project && <Link text={project.text} link={project.url} />}
        {splittedSummary[1] && splittedSummary[1]}
      </StyledSummary>
    </StyledContainer>
  );
};

export default ExperienceItem;
