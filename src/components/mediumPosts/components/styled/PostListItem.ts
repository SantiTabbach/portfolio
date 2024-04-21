import styled from "styled-components";
import { GlassBox } from "../../../common";

export const PostContainer = styled(GlassBox)`
  margin-bottom: 10px;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TopicElement = styled.div`
  padding: 2px 12px 2px 12px;
  margin: 5px;
  background-color: #76abae26;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
