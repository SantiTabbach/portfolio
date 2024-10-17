import ReactGA from 'react-ga4';
import { GlobalStyles } from './theme/GlobalStyles';
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
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
	const trackingId = import.meta.env.VITE_TRACKING_ID;
	trackingId && ReactGA.initialize(trackingId);

	ReactGA.send({
		hitType: 'pageview',
		page: '/',
		title: 'App',
	});

	return (
		<ThemeProvider>
			<GlobalStyles />
			<Header>
				<Santi />
				<Settings />
			</Header>
			<Main>
				<Pane>
					<Presentation />
					<WorkExperience />
				</Pane>
				<Pane>
					<Technologies />
					<Projects />
					<MediumPosts />
				</Pane>
			</Main>
			<SocialMedia />
		</ThemeProvider>
	);
}

export default App;
