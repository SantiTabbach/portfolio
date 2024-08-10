import { Typography } from '../index';
import { Container } from './StyledSection';

interface ISection {
	children: React.ReactNode;
	title: string;
}

const Section: React.FC<ISection> = ({ children, title }) => {
	return (
		<Container>
			<Typography.Subtitle>{title}</Typography.Subtitle>
			{children}
		</Container>
	);
};

export default Section;
