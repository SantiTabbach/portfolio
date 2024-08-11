import { useTranslation } from 'react-i18next';
import { Link } from '@/components';
import { Container } from './StyledSummary';

interface ISummary {
	summary: string;
	project?: {
		url: string;
		text: string;
	};
}

const Summary: React.FC<ISummary> = ({ summary, project }) => {
	const { t } = useTranslation();

	const splittedSummary = t(summary).split('PROJECT');

	return (
		<Container>
			{splittedSummary[0]}
			{project && (
				<Link href={project.url} style={{ fontSize: 14 }}>
					{t(project.text)}
				</Link>
			)}
			{splittedSummary?.[1]}
		</Container>
	);
};

export default Summary;
