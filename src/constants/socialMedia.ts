import {
	MediumIcon,
	GithubIcon,
	LinkedinIcon,
	MailIcon,
} from '@/assets/icons/socialMedia';
import { ISocialMedia } from '@/models';

export const SOCIAL_MEDIA: ISocialMedia[] = [
	{
		icon: LinkedinIcon,
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/santiago-tabbach/',
	},
	{
		icon: GithubIcon,
		title: 'GitHub',
		url: 'https://github.com/SantiTabbach',
	},
	{
		icon: MediumIcon,
		title: 'Medium',
		url: 'https://medium.com/@santitabbach',
	},
	{
		icon: MailIcon,
		title: 'Mail',
		url: 'mailto:tabbach97@gmail.com',
	},
];
