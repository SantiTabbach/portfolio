import React from "react";
import "./Typography.css";

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

const Title: React.FC<ITypography> = ({
  children,
  color = "#4BFFBE",
  fontWeight = 400,
}) => {
  return (
    <p
      className="title"
      style={{
        color,
        fontWeight,
      }}
    >
      {children}
    </p>
  );
};

const Subtitle: React.FC<ITypography> = ({
  children,
  color = "#ffff",
  fontWeight = 200,
}) => {
  return (
    <p
      className="subtitle"
      style={{
        color,
        fontWeight,
      }}
    >
      {children}
    </p>
  );
};

const Paragraph: React.FC<ITypography> = ({
  children,
  color = "#8799bc",
  fontWeight = 200,
}) => {
  return (
    <p
      className="paragraph"
      style={{
        color,
        fontWeight,
      }}
    >
      {children}
    </p>
  );
};

Typography.Title = Title;
Typography.Subtitle = Subtitle;
Typography.Paragraph = Paragraph;

export default Typography;
