export interface IWorkExperience {
  title: string;
  company: string;
  time: string;
  summary: string;
  project?: {
    text: string;
    url: string;
  };
  skills: string[];
}
