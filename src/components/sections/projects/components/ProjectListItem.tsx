import { Typography } from '@/components';
import { IProject } from '@/models';
import { Avatar } from '@/components/commonStyled';
import { StyledProjectDescription } from './StyledProjectListItem';
import BaseListElement from '@/components/common/baseList/components/BaseListElement';
import { useTheme } from '@/contexts/ThemeContext';

const { Paragraph, Subtitle } = Typography;

export interface IProjectListItem {
	project: IProject;
}

const ProjectListItem: React.FC<IProjectListItem> = ({ project }) => {
	const { name, image, description, technologies } = project;

	const { theme, themeStyles } = useTheme();

	return (
		<BaseListElement tags={technologies}>
			<Subtitle color={themeStyles.primary}>{name}</Subtitle>
			<StyledProjectDescription>
				<Paragraph fontSize="14">{description}</Paragraph>
				{image && <Avatar alt="project preview" src={image[theme]} />}
			</StyledProjectDescription>
		</BaseListElement>
	);
};

export default ProjectListItem;
