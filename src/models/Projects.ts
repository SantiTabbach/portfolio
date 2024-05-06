export type TTechnologies = string[];

export type TProject = {
  image?: {
    light: string;
    dark: string;
  };
  name: string;
  description: string;
  technologies: TTechnologies;
};
