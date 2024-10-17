import { IWorkExperience } from '@/models';

export const WORK_EXPERIENCE: IWorkExperience[] = [
	{
		company: 'Codea IT',
		experience: [
			{
				title: 'Lead Developer',
				time: '2024-08-24 - Present',
				summary:
					'Leading the development of a PROJECT that allows users to sync BLE medical devices and obtain enriched information.',
				project: {
					text: 'mobile application',
					url: 'https://apps.apple.com/ar/app/maverick-weelbeing/id6502292196?l=en-GB',
				},
				skills: [
					'React Native',
					'Expo',
					'Ble PLX',
					'Zustand',
					'TanStack Query',
					'Typescript',
					'NestJS',
					'Postgres',
				],
			},
			{
				title: 'FullStack developer',
				time: '2024-06-24 - 2024-08-24',
				summary:
					'Developing new features on both front and backend sides for a PROJECT and on-site AI-powered application.',
				project: {
					text: 'web',
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
					'Maintaining and developing new features for a USA shoulder surgery planning PROJECT.',
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
