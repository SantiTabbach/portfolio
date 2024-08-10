import { Trans, useTranslation } from 'react-i18next';

import { sendLinkEvent } from '@/utils/analytics';
import { Link, Resume, Section, Typography } from '@/components';
import { StyledBold } from '@/components/commonStyled';

const { Paragraph } = Typography;

const Presentation = () => {
	const { t } = useTranslation();

	return (
		<Section title={t('presentation.title')}>
			<Paragraph>
				<Trans
					i18nKey="presentation.paragraph1"
					components={{
						1: <StyledBold />,
						3: <StyledBold />,
						5: <StyledBold />,
						7: <StyledBold />,
					}}
				/>
			</Paragraph>
			<Paragraph>
				<Trans
					i18nKey="presentation.paragraph2"
					components={{
						1: (
							<Link
								onClick={() => sendLinkEvent({ label: 'company' })}
								href="https://www.codeait.com/es"
							>
								Codea IT
							</Link>
						),
					}}
				/>
			</Paragraph>
			<Paragraph>
				<Trans
					i18nKey="presentation.paragraph3"
					components={{
						1: (
							<Link
								onClick={() => sendLinkEvent({ label: 'thesis project' })}
								href="https://www.instagram.com/alertify.ar/"
							>
								thesis project
							</Link>
						),
					}}
				/>
			</Paragraph>
			<Resume />
		</Section>
	);
};

export default Presentation;
