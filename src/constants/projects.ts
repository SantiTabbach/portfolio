import { IProject } from '@/models';

export const PROJECTS: IProject[] = [
	{
		name: 'Blood pressure monitor',
		description:
			'A React Native application that allows seamless connection to a blood pressure monitor for real-time measurements. This app offers a smooth BLE experience with cross-platform support, ensuring a clean and maintainable architecture.',
		technologies: [
			'React Native',
			'Expo',
			'Typescript',
			'React Native BLE PLX',
			'Zustand',
			'Jest',
			'React Testing Library',
		],
		link: 'https://github.com/SantiTabbach/ble-plx-example',
	},
	{
		name: 'Pills of knowledge for the future',
		description:
			"A collection of concise, informative guides on various technologies I've learned over time. I continuously add new entries as I explore and learn new tools, making it a quick reference for myself and others.",
		technologies: [
			'React',
			'React Native',
			'Expo',
			'Typescript',
			'Docker',
			'Nginx',
			'React Native BLE PLX',
			'more...',
		],
		link: 'https://github.com/SantiTabbach/pkf',
	},
	{
		name: 'Breathe Ease',
		description:
			'This app uses React Native Reanimated to offer smooth animations for calming breathing sessions, creating a harmonious experience that reduces stress and improves focus while showcasing advanced mobile animations.',
		technologies: [
			'React',
			'React Native',
			'React Native Reanimated',
			'Typescript',
		],
		link: 'https://github.com/SantiTabbach/breathe-ease',
	},
	{
		name: 'My TODOs',
		description:
			'This is my first Full Stack application. By doing this project I learned how to build a complete CRUD with an authentication and authorization system using the MERN stack.',
		technologies: [
			'Typescript',
			'JWT',
			'Mongoose',
			'Express',
			'Node',
			'React Native',
			'Expo',
			'Axios',
		],
		link: 'https://github.com/SantiTabbach/my-tasks-service',
	},
	{
		name: 'Alertify',
		description:
			'This application serves as my thesis project for my Software Engineering degree. Developed a mobile application to alert neighborhood residents about incidents, track them and generate reports for authorities.',
		technologies: [
			'Typescript',
			'React Native',
			'Expo',
			'RTK Query',
			'Redux Toolkit',
			'Jest',
			'React Testing Library',
		],
	},
	{
		name: 'My Finances',
		description:
			'I developed an application to manage my personal finances, allowing me to create and track shopping lists and generate reports based on the data collected by the app.',
		technologies: ['React Native', 'Expo', 'Firebase'],
	},
	{
		name: 'Recycling Mate',
		description:
			"Recycling Mate emerged as an internal project at SimTLiX for academic purposes. I developed this app for the team to test a Machine Learning model for waste classification. It allows users to take a photo and display the model's results.",
		technologies: ['React Native', 'Expo'],
	},
	{
		name: '5 Tenedores',
		description:
			'The first application I developed following a Udemy course. This app allows users to search for and review restaurants, including authentication and restaurant creation features.',
		technologies: ['React Native', 'Expo', 'Firebase'],
	},
];
