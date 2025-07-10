import { IWorkExperience } from '@/models';

export const WORK_EXPERIENCE: IWorkExperience[] = [
	{
		company: 'Santex',
		experience: [
			{
				title: 'Senior FullStack Engineer',
				time: '2025-03-01 - Present',
				summary:
					'Developing full-stack features for a multitenant PROJECT, focusing on scalability, performance, and interactive user interfaces.',
				project: {
					text: 'logistics platform',
					url: 'https://www.lac.com.ar/website/',
				},
				skills: [
					'ReactJS',
					'Next',
					'Typescript',
					'Tanstack',
					'Tailwind',
					'Shadcn',
					'Leaflet',
					'V0',
				],
			},
			{
				title: 'ReactJS Engineer',
				time: '2024-12-01 - 2025-03-01',
				summary:
					'Led architecture and development for the PROJECT in a monorepo setup. Managed client communication, documentation, and knowledge transfer sessions to ensure a smooth deployment handoff.',
				project: {
					text: 'Firehouse Subs landing page',
					url: 'https://www.firehousesubs.com/',
				},
				skills: ['ReactJS', 'Next', 'Typescript', 'Tailwind', 'Sanity CMS'],
			},
		],
	},
	{
		company: 'Codea IT',
		experience: [
			{
				title: 'Lead Developer',
				time: '2024-08-24 - 2024-11-30',
				summary:
					'Architected the integration of BLE devices and led development of a PROJECT enabling diabetic patients to track glucose, nutrition, and activity, and securely share data with healthcare professionals.',
				project: {
					text: 'mobile first app',
					url: 'https://apps.apple.com/ar/app/maverick-weelbeing/id6502292196?l=en-GB',
				},
				skills: [
					'React Native',
					'Expo',
					'Zustand',
					'TanStack Query',
					'Typescript',
					'NestJS',
					'Postgres',
					'WatermelonDB',
				],
			},
			{
				title: 'FullStack developer',
				time: '2024-06-24 - 2024-08-24',
				summary:
					'Developed full-stack features for a PROJECT powered by AI, improving both frontend interfaces and backend services to enhance real-time user interaction in on-site environments.',
				project: {
					text: 'web app',
					url: 'https://www.emulateme.ai/museums',
				},
				skills: ['React', 'RTKQuery', 'Tailwind', 'Express', 'Node', 'Mongo'],
			},
		],
	},
	{
		company: 'Alertify',
		experience: [
			{
				title: 'SSR Software Engineer',
				time: '2023-04-01 - Present',
				summary:
					'Collaborating with municipalities on the development of an initiative we are working on with colleagues from the Software Engineering program.',
				skills: [
					'Typescript',
					'React Native',
					'Expo',
					'RTK Query',
					'Redux Toolkit',
					'Jest',
					'React Testing Library',
				],
			},
		],
	},
	{
		company: 'Intive',
		experience: [
			{
				title: 'SSR Software Engineer',

				time: '2023-08-01 - 2024-06-30',
				summary:
					'Developed and maintained a React-Electron PROJECT for shoulder surgery planning, implementing new features and rigorous testing to ensure high-quality healthcare software.',
				project: {
					text: 'desktop application',
					url: 'https://shoulderinnovations.com/provoyance-shoulder/',
				},
				skills: ['React', 'Electron', 'Redux', 'Jest', 'Enzyme', 'Axios'],
			},
			{
				title: 'Junior Software Engineer',
				time: '2021-11-01 - 2023-07-31',
				summary:
					'Taking my first steps in my professional career as a developer, learning, and contributing to the team with a proactive attitude.',
				skills: ['React', 'Electron', 'Redux', 'Jest', 'Enzyme', 'Axios'],
			},
		],
	},
];
