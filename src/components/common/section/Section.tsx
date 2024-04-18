import { Typography } from "../index";
import "./Section.css";

type TTitleProps = React.ComponentProps<typeof Typography>;

interface ISection {
  children: React.ReactElement;
  titleProps?: TTitleProps;
  title?: string;
}

const Section: React.FC<ISection> = ({ children, title, titleProps }) => {
  return (
    <div className="section-container">
      {title && (
        <Typography.Subtitle {...titleProps}>{title}</Typography.Subtitle>
      )}
      {children}
    </div>
  );
};

export default Section;
