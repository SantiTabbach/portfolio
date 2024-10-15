export interface IExperience {
	title: string;
	time: string;
	summary: string;
	project?: {
		text: string;
		url: string;
	};
	skills: string[];
}

export interface IWorkExperience {
	company: string;
	experience: IExperience[];
}
