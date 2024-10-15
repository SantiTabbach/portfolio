import { sendLinkEvent } from '@/utils/analytics';
import { Link, Resume, Section, Typography } from '@/components';
import { StyledBold } from '@/components/commonStyled';

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
				Currently leading a development team for a healthcare project at{' '}
				<Link
					onClick={() => sendLinkEvent({ label: 'company' })}
					href="https://www.codeait.com/es"
				>
					Codea IT
				</Link>
			</Paragraph>
			<Paragraph>
				Also I'm working on my{' '}
				<Link
					onClick={() => sendLinkEvent({ label: 'thesis project' })}
					href="https://www.instagram.com/alertify.ar/"
				>
					thesis project
				</Link>{' '}
				to complete my Software Engineering degree.
			</Paragraph>
			<Resume />
		</Section>
	);
};

export default Presentation;
