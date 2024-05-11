import { useTheme } from "styled-components";
import { Typography } from "../../../common";
import { TProject, TTechnologies } from "../../../../models/Projects";
import { StyledAvatar, StyledTag } from "../../../commonStyled";
import { Theme } from "../../../../models";
import {
  StyledProjectContainer,
  StyledProjectDescription,
  StyledTechnologiesContainer,
} from "./StyledProjectListItem";

const { Paragraph, Subtitle } = Typography;

interface IProjectListItem {
  project: TProject;
}

interface ITechnologiesList {
  technologies: TTechnologies;
}

const ProjectListItem: React.FC<IProjectListItem> = ({ project }) => {
  const theme = useTheme();

  const { name, image, description, technologies } = project;

  const Technologies = ({ technologies }: ITechnologiesList) => {
    return (
      <StyledTechnologiesContainer>
        {technologies.map((tech) => (
          <StyledTag
            key={tech}
            color={theme.primary}
            fontWeight="400"
            fontSize="14"
          >
            {tech}
          </StyledTag>
        ))}
      </StyledTechnologiesContainer>
    );
  };

  return (
    <StyledProjectContainer
      title={<Subtitle color={theme.primary}>{name}</Subtitle>}
      footer={<Technologies technologies={technologies} />}
    >
      <StyledProjectDescription>
        <Paragraph fontSize="14">{description}</Paragraph>
        {image && (
          <StyledAvatar alt="project preview" src={image[theme.key as Theme]} />
        )}
      </StyledProjectDescription>
    </StyledProjectContainer>
  );
};

export default ProjectListItem;
