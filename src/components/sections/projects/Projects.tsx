import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Theme, TProject } from '@/models';

import { BaseList, Section, Typography } from '@/components/common';
import { Avatar, Description, ListWrapper } from '@/components/commonStyled';

import { PROJECTS } from './helper/consts';
import ProjectListItem from './components/ProjectListItem';
import ProgrammingAvatarDark from '@/assets/avatars/programming-avatar.png';
import ProgrammingAvatarLight from '@/assets/avatars/programming-avatar-light.png';

const { Paragraph } = Typography;

interface IProjectItem {
	project: TProject;
}

const avatar = {
	[Theme.LIGHT]: ProgrammingAvatarLight,
	[Theme.DARK]: ProgrammingAvatarDark,
};

const Projects = () => {
	const { t } = useTranslation();
	const theme = useTheme();

	return (
		<Section title={t('projects.title')}>
			<Description>
				<Paragraph>{t('projects.description')}</Paragraph>
				<Avatar alt="santi tabbach memoji" src={avatar[theme.key as Theme]} />
			</Description>
			<ListWrapper>
				<BaseList<TProject, IProjectItem>
					items={PROJECTS}
					resourceName="project"
					itemComponent={ProjectListItem}
				/>
			</ListWrapper>
		</Section>
	);
};

export default Projects;
