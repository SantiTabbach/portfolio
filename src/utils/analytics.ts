import ReactGA from 'react-ga4';
import { UaEventOptions } from 'react-ga4/types/ga4';

export enum CATEGORIES {
	LANGUAGE = 'Language',
	MEDIUM_POSTS = 'Medium posts',
	PROJECTS = 'Projects',
	LINKS = 'Links',
	SOCIAL = 'Social media',
	RESUME = 'Resume',
}

export const ACTIONS = {
	[CATEGORIES.LANGUAGE]: 'Change Language',
	[CATEGORIES.MEDIUM_POSTS]: 'Open medium post',
	[CATEGORIES.PROJECTS]: 'Read project',
	[CATEGORIES.SOCIAL]: 'Visit social media',
	[CATEGORIES.LINKS]: 'Open link',
	[CATEGORIES.RESUME]: 'Download resume',
};

const sendEvent = (category: CATEGORIES, action: string) => {
	return (options: Partial<UaEventOptions>) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { category: _category, action: _action, ...rest } = options;

		ReactGA.event({
			category,
			action,
			...rest,
		});
	};
};

export const sendLanguageEvent = sendEvent(
	CATEGORIES.LANGUAGE,
	ACTIONS[CATEGORIES.LANGUAGE]
);
export const sendLinkEvent = sendEvent(
	CATEGORIES.LINKS,
	ACTIONS[CATEGORIES.LINKS]
);
export const sendMediumEvent = sendEvent(
	CATEGORIES.MEDIUM_POSTS,
	ACTIONS[CATEGORIES.MEDIUM_POSTS]
);
export const sendProjectsEvent = sendEvent(
	CATEGORIES.PROJECTS,
	ACTIONS[CATEGORIES.PROJECTS]
);
export const sendSocialMediaEvent = sendEvent(
	CATEGORIES.SOCIAL,
	ACTIONS[CATEGORIES.SOCIAL]
);
export const sendResumeEvent = sendEvent(
	CATEGORIES.RESUME,
	ACTIONS[CATEGORIES.RESUME]
);
