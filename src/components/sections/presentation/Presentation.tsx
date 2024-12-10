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
				Currently collaborating with municipalities on a
				<Link
					onClick={() => sendLinkEvent({ label: 'company' })}
					href="https://www.alertify.com.ar"
				>
					personal initiative
				</Link>{' '}
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
