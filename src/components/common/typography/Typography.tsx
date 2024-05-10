import React from "react";
import {
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from "./StyledTypography";

interface ITypography {
  children: React.ReactNode;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
}

const Typography: React.FC<ITypography> & {
  Title: React.FC<ITypography>;
  Subtitle: React.FC<ITypography>;
  Paragraph: React.FC<ITypography>;
} = ({ children }) => {
  return <div>{children}</div>;
};

const Title: React.FC<ITypography> = ({
  fontSize = "46",
  fontWeight = "400",
  color,
  children,
}) => {
  return (
    <StyledTitle fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </StyledTitle>
  );
};

const Subtitle: React.FC<ITypography> = ({
  fontSize = "20",
  fontWeight = "400",
  color,
  children,
}) => {
  return (
    <StyledSubtitle fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </StyledSubtitle>
  );
};

const Paragraph: React.FC<ITypography> = ({
  fontSize = "16",
  fontWeight = "200",
  color,
  children,
}) => {
  return (
    <StyledParagraph fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </StyledParagraph>
  );
};

Typography.Title = Title;
Typography.Subtitle = Subtitle;
Typography.Paragraph = Paragraph;

export default Typography;
