import Typography from "../typography/Typography";
import {
  StyledGlassBoxFooter,
  StyledGlassBoxContainer,
} from "./StyledGlassBox";

interface IGlassBox {
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  active?: boolean;
  className?: string;
}

const GlassBox: React.FC<IGlassBox> = ({
  title,
  children,
  footer,
  active,
  className,
}) => {
  return (
    <StyledGlassBoxContainer
      active={active ? "true" : ""}
      className={className}
    >
      {title && <Typography.Subtitle>{title}</Typography.Subtitle>}
      {children}
      {footer && <StyledGlassBoxFooter>{footer}</StyledGlassBoxFooter>}
    </StyledGlassBoxContainer>
  );
};

export default GlassBox;
