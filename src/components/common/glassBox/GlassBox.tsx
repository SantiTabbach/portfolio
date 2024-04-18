import Typography from "../typography/Typography";
import "./GlassBox.css";

interface IGlassBox {
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  active?: boolean;
}

const GlassBox: React.FC<IGlassBox> = ({ title, children, footer, active }) => {
  return (
    <div className={`glass-box${active ? "-active" : ""}`}>
      {title && <Typography.Subtitle>{title}</Typography.Subtitle>}
      {children}
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

export default GlassBox;
