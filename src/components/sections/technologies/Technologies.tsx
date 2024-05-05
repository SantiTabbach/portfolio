import React from "react";
import { TECHNOLOGIES } from "../../../consts";
import Typography from "../../common/typography/Typography";
import {
  StyledTechnologyElement,
  StyledTenchnologiesContainer,
} from "./StyledTechnologies";
import { Section } from "../../common";

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
    <Section title="Technologies that I use">
      <StyledTenchnologiesContainer className="technologies-container">
        {TECHNOLOGIES.map(({ name, icon: Icon }) => (
          <TechnologyElement key={name} name={name} icon={<Icon />} />
        ))}
      </StyledTenchnologiesContainer>
    </Section>
  );
};

export default Technologies;
