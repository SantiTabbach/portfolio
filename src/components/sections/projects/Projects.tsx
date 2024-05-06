import { useTheme } from "styled-components";
import { Theme, TProject } from "../../../models";
import ProgrammingAvatar from "../../../assets/avatars/programming-avatar.png";
import ProgrammingAvatarLight from "../../../assets/avatars/programming-avatar-light.png";
import { RegularList, Section, Typography } from "../../common";
import { StyledAvatar, StyledDescription } from "../../commonStyled";
import { StyledProjectsContainer } from "./StyledProjects";
import { PROJECTS } from "./helper/consts";
import ProjectListItem from "./components/ProjectListItem";

interface IProjectItem {
  project: TProject;
  key: number;
}

const { Paragraph } = Typography;

const Projects = () => {
  const theme = useTheme();

  return (
    <Section title="My projects">
      <StyledDescription>
        <StyledAvatar
          alt="santi tabbach memoji"
          src={
            theme.key === Theme.LIGHT
              ? ProgrammingAvatarLight
              : ProgrammingAvatar
          }
        />
        <Paragraph>
          My professional experience focuses on web development with React;
          however, my true passion lies in mobile development. You'll catch that
          vibe in my personal projects..
        </Paragraph>
      </StyledDescription>
      <StyledProjectsContainer>
        <RegularList<TProject, IProjectItem>
          items={PROJECTS}
          resourceName="project"
          itemComponent={ProjectListItem}
        />
      </StyledProjectsContainer>
    </Section>
  );
};

export default Projects;
