import { TProject } from "../../../../models/Projects";

export const PROJECTS: TProject[] = [
  {
    name: "Alertify",
    description:
      "This application serves as my thesis project for my Software Engineering degree. Developed a mobile application to alert neighborhood residents about incidents, track them and generate reports for authorities.",
    technologies: [
      "Typescript",
      "React Native",
      "Expo",
      "RTK Query",
      "Redux Toolkit",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    name: "My Finances",
    description:
      "I developed an application to manage my personal finances, allowing me to create and track shopping lists and generate reports based on the data collected by the app.",
    technologies: ["React Native", "Expo", "Firebase"],
  },
  {
    name: "Recycling Mate",
    description:
      "Recycling Mate emerged as an internal project at SimTLiX for academic purposes. I developed this app for the team to test a Machine Learning model for waste classification. It allows users to take a photo and display the model's results.",
    technologies: ["React Native", "Expo"],
  },
  {
    name: "5 Tenedores",
    description:
      "The first application I developed following a Udemy course. This app allows users to search for and review restaurants, including authentication and restaurant creation features.",
    technologies: ["React Native", "Expo", "Firebase"],
  },
];
