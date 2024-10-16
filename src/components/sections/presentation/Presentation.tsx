import { sendLinkEvent } from '@/utils/analytics';
import { Link, Resume, Section, Typography, Contact } from '@/components';
import { StyledBold } from '@/components/commonStyled';

const { Paragraph } = Typography;

const Presentation = () => {
	return (
		<Section title="Hey! I'm Santi">
			<Paragraph>
				<StyledBold>Software Engineer</StyledBold> with hands-on experience in
				web and mobile development. Highly proficient in{' '}
				<StyledBold>React</StyledBold> and <StyledBold>React Native</StyledBold>
				, with knowledge on <StyledBold>NodeJS</StyledBold>,{' '}
				<StyledBold>Express</StyledBold> and <StyledBold>NestJS</StyledBold>.
			</Paragraph>
			<Paragraph>
				Currently leading a development team on a healthcare project at{' '}
				<Link
					onClick={() => sendLinkEvent({ label: 'company' })}
					href="https://www.codeait.com/es"
				>
					Codea IT
				</Link>
				while also collaborating with municipalities on a personal initiative
				developed alongside colleagues.
			</Paragraph>
			<div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
				<Resume />
				<Contact />
			</div>
		</Section>
	);
};

export default Presentation;
