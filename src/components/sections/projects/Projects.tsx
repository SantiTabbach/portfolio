import { useTranslation } from 'react-i18next';
import { IProject } from '@/models';
import { LIST_RESOURCES, THEME } from '@/enums';
import { PROJECTS } from '@/constants';
import { BaseList, Section, Typography } from '@/components';
import { Avatar, Description, ListWrapper } from '@/components/commonStyled';
import { useTheme } from '@/theme/hooks/useTheme';
import ProgrammingAvatarDark from '@/assets/avatars/programming-avatar.png';
import ProgrammingAvatarLight from '@/assets/avatars/programming-avatar-light.png';
import ProjectListItem, {
	IProjectListItem,
} from './components/ProjectListItem';

const { Paragraph } = Typography;

const avatar = {
	[THEME.LIGHT]: ProgrammingAvatarLight,
	[THEME.DARK]: ProgrammingAvatarDark,
};

const Projects = () => {
	const { t } = useTranslation();
	const { theme } = useTheme();

	return (
		<Section title={t('projects.title')}>
			<Description>
				<Paragraph>{t('projects.description')}</Paragraph>
				<Avatar alt="santi tabbach memoji" src={avatar[theme]} />
			</Description>
			<ListWrapper>
				<BaseList<IProject, IProjectListItem>
					items={PROJECTS}
					resourceName={LIST_RESOURCES.project}
					itemComponent={ProjectListItem}
				/>
			</ListWrapper>
		</Section>
	);
};

export default Projects;
