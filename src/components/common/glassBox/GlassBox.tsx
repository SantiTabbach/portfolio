import Typography from "../typography/Typography";
import { Footer, GlassBoxContainer } from "./styled";

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
    <GlassBoxContainer active={active} className={className}>
      {title && <Typography.Subtitle>{title}</Typography.Subtitle>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </GlassBoxContainer>
  );
};

export default GlassBox;
