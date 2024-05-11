import { useTheme } from "styled-components";
import { Theme, TProject } from "../../../models";
import ProgrammingAvatar from "../../../assets/avatars/programming-avatar.png";
import ProgrammingAvatarLight from "../../../assets/avatars/programming-avatar-light.png";
import { BaseList, Section, Typography } from "../../common";
import {
  StyledAvatar,
  StyledDescription,
  StyledListWrapper,
} from "../../commonStyled";
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
        <Paragraph>
          My professional experience focuses on web development with React;
          however, my true passion lies in mobile development. You'll catch that
          vibe in my personal projects..
        </Paragraph>
        <StyledAvatar
          alt="santi tabbach memoji"
          src={
            theme.key === Theme.LIGHT
              ? ProgrammingAvatarLight
              : ProgrammingAvatar
          }
        />
      </StyledDescription>
      <StyledListWrapper>
        <BaseList<TProject, IProjectItem>
          items={PROJECTS}
          resourceName="project"
          itemComponent={ProjectListItem}
        />
      </StyledListWrapper>
    </Section>
  );
};

export default Projects;
