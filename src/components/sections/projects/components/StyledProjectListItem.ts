import styled from "styled-components";
import { GlassBox } from "../../../common";
import { StyledParagraph } from "../../../common/typography/StyledTypography";

export const StyledProjectContainer = styled(GlassBox)`
  margin-bottom: 10px;
`;

export const StyledProjectDescription = styled.div`
  display: flex;

  @media (max-width: 1120px) and (min-width: 770px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTechnologyElement = styled(StyledParagraph)`
  padding: 2px 12px 2px 12px;
  margin: 5px;
  background-color: #76abae26;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
