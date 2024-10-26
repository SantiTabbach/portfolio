import { Link, Typography } from '@/components';
import { IProject } from '@/models';
import { StyledProjectDescription } from './StyledProjectListItem';
import BaseListElement from '@/components/common/baseList/components/BaseListElement';
import { useTheme } from '@/contexts/ThemeContext';

const { Paragraph, Subtitle } = Typography;

export interface IProjectListItem {
	project: IProject;
}

const ProjectListItem: React.FC<IProjectListItem> = ({ project }) => {
	const { name, description, technologies, link } = project;

	const { themeStyles } = useTheme();

	return (
		<BaseListElement tags={technologies}>
			<Subtitle color={themeStyles.primary}>{name}</Subtitle>
			<StyledProjectDescription>
				<Paragraph fontSize="14">{description}</Paragraph>
			</StyledProjectDescription>
			{link && <Link href={link}>Repository</Link>}
		</BaseListElement>
	);
};

export default ProjectListItem;
