import { useTheme } from 'styled-components';
import { Theme, TProject } from '../../../models';
import ProgrammingAvatar from '../../../assets/avatars/programming-avatar.png';
import ProgrammingAvatarLight from '../../../assets/avatars/programming-avatar-light.png';
import { BaseList, Section, Typography } from '../../common';
import {
	StyledAvatar,
	StyledDescription,
	StyledListWrapper,
} from '../../commonStyled';
import useTranslation from '../../../hooks/useTranslation';
import { PROJECTS } from './helper/consts';
import ProjectListItem from './components/ProjectListItem';

interface IProjectItem {
	project: TProject;
}

const { Paragraph } = Typography;

const Projects = () => {
	const { t } = useTranslation();
	const theme = useTheme();

	return (
		<Section title={t('projects.title')}>
			<StyledDescription>
				<Paragraph>{t('projects.description')}</Paragraph>
				<StyledAvatar
					alt="santi tabbach memoji"
					src={
						theme.key === Theme.LIGHT
							? ProgrammingAvatarLight
							: ProgrammingAvatar
					}
				/>
			</StyledDescription>
			<StyledListWrapper>
				<BaseList<TProject, IProjectItem>
					items={PROJECTS}
					resourceName="project"
					itemComponent={ProjectListItem}
				/>
			</StyledListWrapper>
		</Section>
	);
};

export default Projects;
