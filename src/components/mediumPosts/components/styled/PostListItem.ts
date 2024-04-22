import styled from "styled-components";
import { GlassBox } from "../../../common";
import { StyledParagraph } from "../../../common/typography/styled/Typography";

export const PostContainer = styled(GlassBox)`
  margin-bottom: 10px;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TopicElement = styled(StyledParagraph)`
  padding: 2px 12px 2px 12px;
  margin: 5px;
  background-color: #76abae26;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
