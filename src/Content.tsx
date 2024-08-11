import {
	Header,
	Main,
	MediumPosts,
	Pane,
	Presentation,
	Projects,
	Santi,
	Settings,
	SocialMedia,
	Technologies,
	WorkExperience,
} from './components';
import { THEME } from './enums';

interface IContent {
	theme: THEME;
	themeToggler: () => void;
}

const Content: React.FC<IContent> = ({ theme, themeToggler }) => {
	return (
		<>
			<Header>
				<Santi theme={theme} />
				<Settings theme={theme} themeToggler={themeToggler} />
			</Header>
			<Main>
				<Pane>
					<Presentation />
					<WorkExperience />
					<Technologies />
				</Pane>
				<Pane>
					<Projects />
					<MediumPosts />
				</Pane>
			</Main>
			<SocialMedia />
		</>
	);
};

export default Content;
