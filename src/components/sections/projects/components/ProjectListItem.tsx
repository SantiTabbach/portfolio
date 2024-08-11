import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/components';
import { IProject } from '@/models';
import { Avatar } from '@/components/commonStyled';
import { THEME } from '@/enums';

import { StyledProjectDescription } from './StyledProjectListItem';
import BaseListElement from '@/components/common/baseList/components/BaseListElement';

const { Paragraph, Subtitle } = Typography;

export interface IProjectListItem {
	project: IProject;
}

const ProjectListItem: React.FC<IProjectListItem> = ({ project }) => {
	const { name, image, description, technologies } = project;

	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<BaseListElement tags={technologies}>
			<Subtitle color={theme.primary}>{t(name)}</Subtitle>
			<StyledProjectDescription>
				<Paragraph fontSize="14">{t(description)}</Paragraph>
				{image && (
					<Avatar alt="project preview" src={image[theme.key as THEME]} />
				)}
			</StyledProjectDescription>
		</BaseListElement>
	);
};

export default ProjectListItem;
