import { IWorkExperience } from '@/models';

export const WORK_EXPERIENCE: IWorkExperience[] = [
	{
		company: 'Codea IT',
		experience: [
			{
				title: 'work-experience.experience4.title',
				time: 'work-experience.experience4.time',
				summary: 'work-experience.experience4.summary',
				project: {
					text: 'work-experience.experience4.project',
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
				title: 'work-experience.experience3.title',
				time: 'work-experience.experience3.time',
				summary: 'work-experience.experience3.summary',
				project: {
					text: 'work-experience.experience3.project',
					url: 'https://www.emulateme.ai/museums',
				},
				skills: ['React', 'RTKQuery', 'Tailwind', 'Express', 'Node', 'Mongo'],
			},
		],
	},
	{
		company: 'Intive',
		experience: [
			{
				title: 'work-experience.experience2.title',

				time: 'work-experience.experience2.time',
				summary: 'work-experience.experience2.summary',
				project: {
					text: 'work-experience.experience2.project',
					url: 'https://shoulderinnovations.com/provoyance-shoulder/',
				},
				skills: ['React', 'Electron', 'Redux', 'Jest', 'Enzyme', 'Axios'],
			},
			{
				title: 'work-experience.experience1.title',
				time: 'work-experience.experience1.time',
				summary: 'work-experience.experience1.summary',
				skills: ['React', 'Electron', 'Redux', 'Jest', 'Enzyme', 'Axios'],
			},
		],
	},
];
