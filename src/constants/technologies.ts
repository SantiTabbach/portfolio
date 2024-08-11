import {
	ReduxIcon,
	ReactIcon,
	JestIcon,
	TypescriptIcon,
	FirebaseIcon,
	NodeIcon,
	DockerIcon,
	FigmaIcon,
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
		icon: FigmaIcon,
		name: 'Figma',
	},
	{
		icon: FirebaseIcon,
		name: 'Firebase',
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
