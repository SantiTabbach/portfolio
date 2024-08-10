import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Theme, TProject } from '@/models';

import { BaseList, Section, Typography } from '@/components/common';
import { Avatar, Description, ListWrapper } from '@/components/commonStyled';

import { PROJECTS } from './helper/consts';
import ProjectListItem, {
	IProjectListItem,
} from './components/ProjectListItem';
import ProgrammingAvatarDark from '@/assets/avatars/programming-avatar.png';
import ProgrammingAvatarLight from '@/assets/avatars/programming-avatar-light.png';
import { LIST_RESOURCES } from '@/enums/lists';

const { Paragraph } = Typography;

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
				<BaseList<TProject, IProjectListItem>
					items={PROJECTS}
					resourceName={LIST_RESOURCES.project}
					itemComponent={ProjectListItem}
				/>
			</ListWrapper>
		</Section>
	);
};

export default Projects;
