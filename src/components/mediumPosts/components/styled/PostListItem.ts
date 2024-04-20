import styled from "styled-components";
import { GlassBox } from "../../../common";

export const PostContainer = styled(GlassBox)`
  margin-bottom: 10px;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #4bffbe;
  }
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TopicElement = styled.div`
  padding: 2px 12px 2px 12px;
  margin: 5px;
  background-color: #4affbd33;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
