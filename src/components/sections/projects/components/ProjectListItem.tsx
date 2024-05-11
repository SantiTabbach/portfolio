import { useTheme } from "styled-components";
import { Typography } from "../../../common";
import { TProject } from "../../../../models/Projects";
import { StyledAvatar } from "../../../commonStyled";
import { Theme } from "../../../../models";
import BaseListElement from "../../../common/baseList/components/BaseListElement";
import { StyledProjectDescription } from "./StyledProjectListItem";

const { Paragraph, Subtitle } = Typography;

interface IProjectListItem {
  project: TProject;
}

const ProjectListItem: React.FC<IProjectListItem> = ({ project }) => {
  const { name, image, description, technologies } = project;

  const theme = useTheme();

  return (
    <BaseListElement
      title={<Subtitle color={theme.primary}>{name}</Subtitle>}
      tags={technologies}
    >
      <StyledProjectDescription>
        <Paragraph fontSize="14">{description}</Paragraph>
        {image && (
          <StyledAvatar alt="project preview" src={image[theme.key as Theme]} />
        )}
      </StyledProjectDescription>
    </BaseListElement>
  );
};

export default ProjectListItem;
