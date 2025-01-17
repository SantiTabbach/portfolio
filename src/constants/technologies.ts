import {
	ReduxIcon,
	ReactIcon,
	JestIcon,
	TypescriptIcon,
	NextJsIcon,
	NodeIcon,
	DockerIcon,
	ExpoIcon,
} from '@/assets/icons/technologies';
import { ITechnology } from '@/models';

export const TECHNOLOGIES: ITechnology[] = [
	{
		icon: TypescriptIcon,
		name: 'Typescript',
	},
	{
		icon: ReactIcon,
		name: 'React',
	},
	{
		icon: ReduxIcon,
		name: 'Redux',
	},
	{
		icon: JestIcon,
		name: 'Jest',
	},
	{
		icon: ExpoIcon,
		name: 'Expo',
	},
	{
		icon: NextJsIcon,
		name: 'Next',
	},
	{
		icon: NodeIcon,
		name: 'Node',
	},
	{
		icon: DockerIcon,
		name: 'Docker',
	},
];
