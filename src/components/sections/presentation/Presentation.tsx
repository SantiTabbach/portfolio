import { Link, Section, Typography } from '../../common';
import { StyledBold } from '../../commonStyled';
import DownloadButton from '../../downloadButton/DownloadButton';

const { Paragraph } = Typography;

const Presentation = () => {
	return (
		<Section title="Hey! I'm Santi">
			<Paragraph>
				Passionate <StyledBold>SSR Software Developer</StyledBold> with
				experience in <StyledBold>React</StyledBold> and{' '}
				<StyledBold>React Native</StyledBold>, and a keen interest in{' '}
				<StyledBold>UX/UI design</StyledBold>.
			</Paragraph>
			<Paragraph>
				Currently contributing to an on-site immersive experience project, while
				training in backend development at{' '}
				<Link href="https://www.codeait.com/es">Codea IT</Link>
			</Paragraph>
			<Paragraph>
				Also working on my{' '}
				<Link href="https://www.alertify.ar">thesis project</Link> to complete
				my Software Engineering degree.
			</Paragraph>
			<DownloadButton />
		</Section>
	);
};

export default Presentation;
