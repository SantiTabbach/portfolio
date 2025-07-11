export type Domain =
	| 'Civic Tech'
	| 'Healthcare'
	| 'Logistic'
	| 'AI'
	| 'E-Commerce';

export interface IExperience {
	title: string;
	time: string;
	summary: string;
	project?: {
		text: string;
		url: string;
	};
	skills: string[];
	domain: Domain[];
}

export interface IWorkExperience {
	company: string;
	experience: IExperience[];
}
