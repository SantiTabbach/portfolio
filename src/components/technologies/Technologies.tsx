import React from "react";
import { TECHNOLOGIES } from "../../consts";
import Typography from "../common/typography/Typography";
import {
  StyledTechnologyElement,
  StyledTenchnologiesContainer,
} from "./StyledTechnologies";

interface ISkillElement {
  icon: JSX.Element;
  name: string;
}

const { Paragraph } = Typography;

const Technologies: React.FC = () => {
  const TechnologyElement = ({ icon, name }: ISkillElement) => (
    <StyledTechnologyElement>
      {icon}
      <Paragraph>{name}</Paragraph>
    </StyledTechnologyElement>
  );

  return (
    <StyledTenchnologiesContainer className="technologies-container">
      {TECHNOLOGIES.map(({ name, icon: Icon }) => (
        <TechnologyElement key={name} name={name} icon={<Icon />} />
      ))}
    </StyledTenchnologiesContainer>
  );
};

export default Technologies;
