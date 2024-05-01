import React from "react";
import { Typography } from "../../common";
import { IWorkExperience } from "../../../models";
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
}) => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledCircle />
      <Subtitle color={theme.primary} fontSize="16">
        {title} - {company}
      </Subtitle>
      <Paragraph color={theme.subtitle} fontWeight="400" fontSize="14">
        {time}
      </Paragraph>
      <StyledSummary>{summary}</StyledSummary>
    </StyledContainer>
  );
};

export default ExperienceItem;
