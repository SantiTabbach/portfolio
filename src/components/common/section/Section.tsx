import { Typography } from "../index";
import { StyledSection } from "./StyledSection";

type TTitleProps = React.ComponentProps<typeof Typography>;

interface ISection {
  children: React.ReactNode;
  titleProps?: TTitleProps;
  title?: string;
}

const Section: React.FC<ISection> = ({ children, title, titleProps }) => {
  return (
    <StyledSection>
      {title && (
        <Typography.Subtitle {...titleProps}>{title}</Typography.Subtitle>
      )}
      {children}
    </StyledSection>
  );
};

export default Section;
