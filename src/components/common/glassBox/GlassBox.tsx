import { GlassBoxType } from '@/enums';
import { Container } from './StyledGlassBox';

interface IGlassBox {
	children: React.ReactNode;
	type?: GlassBoxType;
}

const GlassBox: React.FC<IGlassBox> = ({
	children,
	type = GlassBoxType.INACTIVE,
}) => {
	return <Container type={type}>{children}</Container>;
};

export default GlassBox;
