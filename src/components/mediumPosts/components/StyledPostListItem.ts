import styled from "styled-components";
import { GlassBox } from "../../common";
import { StyledParagraph } from "../../common/typography/StyledTypography";

export const StyledPostContainer = styled(GlassBox)`
  margin-bottom: 10px;
`;

export const StyledTitleLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const StyledTopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTopicElement = styled(StyledParagraph)`
  padding: 2px 12px 2px 12px;
  margin: 5px;
  background-color: #76abae26;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
