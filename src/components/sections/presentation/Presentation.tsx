import { Trans } from 'react-i18next';
import useTranslation from '../../../hooks/useTranslation';
import { Link, Section, Typography } from '../../common';
import { StyledBold } from '../../commonStyled';
import DownloadButton from '../../downloadButton/DownloadButton';

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
						1: <Link href="https://www.codeait.com/es">Codea IT</Link>,
					}}
				/>
			</Paragraph>
			<Paragraph>
				<Trans
					i18nKey="presentation.paragraph3"
					components={{
						1: (
							<Link href="https://www.instagram.com/alertify.ar/">
								thesis project
							</Link>
						),
					}}
				/>
			</Paragraph>
			<DownloadButton />
		</Section>
	);
};

export default Presentation;
