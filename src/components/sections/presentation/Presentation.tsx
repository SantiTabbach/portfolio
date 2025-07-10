import { sendLinkEvent } from '@/utils/analytics';
import { Link, Resume, Section, Typography, Contact } from '@/components';
import { StyledBold } from '@/components/commonStyled';

const { Paragraph } = Typography;

const Presentation = () => {
	return (
		<Section title="Hey! I'm Santi">
			<Paragraph>
				<StyledBold>Senior Software Engineer</StyledBold> with hands-on
				experience in web and mobile development. Highly proficient in{' '}
				<StyledBold>React</StyledBold> and <StyledBold>React Native</StyledBold>
				, with knowledge on <StyledBold>NodeJS</StyledBold>,{' '}
				<StyledBold>Express</StyledBold> and <StyledBold>NestJS</StyledBold>.
			</Paragraph>
			<Paragraph>
				Currently working as a Senior ReactJS Engineer at{' '}
				<Link
					onClick={() => sendLinkEvent({ label: 'company' })}
					href="https://santexgroup.com/"
				>
					Santex
				</Link>
				.
			</Paragraph>
			<div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
				<Resume />
				<Contact />
			</div>
		</Section>
	);
};

export default Presentation;
