import React from "react";
import { Container, Pane } from "./styled";

interface IContent {
  children: React.ReactNode;
}

const Content: React.FC<IContent> = ({ children }) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Container>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Container>
  );
};

export default Content;
