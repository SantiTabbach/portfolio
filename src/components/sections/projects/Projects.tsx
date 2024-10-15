import { IProject } from '@/models';

import { BaseList, Section, Typography } from '@/components';
import { Avatar, Description, ListWrapper } from '@/components/commonStyled';

import ProjectListItem, {
	IProjectListItem,
} from './components/ProjectListItem';
import ProgrammingAvatarDark from '@/assets/avatars/programming-avatar.png';
import ProgrammingAvatarLight from '@/assets/avatars/programming-avatar-light.png';
import { LIST_RESOURCES, THEME } from '@/enums';
import { PROJECTS } from '@/constants';
import { useTheme } from '@/contexts/ThemeContext';

const { Paragraph } = Typography;

const avatar = {
	[THEME.LIGHT]: ProgrammingAvatarLight,
	[THEME.DARK]: ProgrammingAvatarDark,
};

const Projects = () => {
	const { theme } = useTheme();

	return (
		<Section title="My projects">
			<Description>
				<Paragraph>
					My professional experience focuses on web development with React;
					however, my true passion lies in mobile development. You'll catch that
					vibe in my personal projects..
				</Paragraph>
				<Avatar alt="santi tabbach memoji" src={avatar[theme]} />
			</Description>
			<ListWrapper>
				<BaseList<IProject, IProjectListItem>
					items={PROJECTS}
					resourceName={LIST_RESOURCES.project}
					itemComponent={ProjectListItem}
					keyExtractor={({ name }) => name}
				/>
			</ListWrapper>
		</Section>
	);
};

export default Projects;
