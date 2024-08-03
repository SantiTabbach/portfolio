import DownloadFileIcon from '../../assets/icons/DownloadFileIcon';
import { StyledTitleLink, StyledButton } from './StyledDownloadButton';
import resumePDF from '../../resources/resume.pdf';
import { useCallback } from 'react';
import useTranslation from '../../hooks/useTranslation';
import { sendResumeEvent } from '../../utils/analytics';

const DownloadButton = () => {
	const { t } = useTranslation();

	const downloadPdf = useCallback(() => {
		sendResumeEvent({ label: 'Santi Tabbach.pdf downloaded' });
		const link = document.createElement('a');
		link.href = resumePDF;
		link.download = 'Santi Tabbach.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}, []);

	return (
		<StyledButton onClick={downloadPdf}>
			<StyledTitleLink>{t('presentation.resume')}</StyledTitleLink>
			<DownloadFileIcon size={20} />
		</StyledButton>
	);
};

export default DownloadButton;
