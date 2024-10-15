import { useCallback } from 'react';
import DownloadFileIcon from '@/assets/icons/DownloadFileIcon';
import resumePDF from '@/resources/resume.pdf';
import { sendResumeEvent } from '@/utils/analytics';
import { Button } from './StyledResume';
import { Typography } from '../common';

const DownloadButton = () => {
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
		<Button onClick={downloadPdf}>
			<Typography.Subtitle fontSize="16">Resume</Typography.Subtitle>
			<DownloadFileIcon size={20} />
		</Button>
	);
};

export default DownloadButton;
