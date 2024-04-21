import React from "react";
import {
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from "./styled/Typography";

interface ITypography {
  children: React.ReactNode;
  color?: string;
  fontWeight?: string;
}

const Typography: React.FC<ITypography> & {
  Title: React.FC<ITypography>;
  Subtitle: React.FC<ITypography>;
  Paragraph: React.FC<ITypography>;
} = ({ children }) => {
  return <div>{children}</div>;
};

const Title: React.FC<ITypography> = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

const Subtitle: React.FC<ITypography> = (props) => {
  return <StyledSubtitle {...props}>{props.children}</StyledSubtitle>;
};

const Paragraph: React.FC<ITypography> = (props) => {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
};

Typography.Title = Title;
Typography.Subtitle = Subtitle;
Typography.Paragraph = Paragraph;

export default Typography;
