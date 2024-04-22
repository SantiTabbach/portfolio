import React from "react";
import { StyledContainer, StyledPane } from "./StyledContent";

interface IContent {
  children: React.ReactNode;
}

const Content: React.FC<IContent> = ({ children }) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <StyledContainer>
      <StyledPane>{left}</StyledPane>
      <StyledPane>{right}</StyledPane>
    </StyledContainer>
  );
};

export default Content;
