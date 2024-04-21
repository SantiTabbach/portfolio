import React from "react";
import { TECHNOLOGIES } from "../../consts";
import Typography from "../common/typography/Typography";
import "./Technologies.css";
import { StyledSkillElement } from "./styled/Technologies";

interface ISkillElement {
  icon: JSX.Element;
  name: string;
}

const { Paragraph } = Typography;

const Technologies: React.FC = () => {
  const SkillElement = ({ icon, name }: ISkillElement) => (
    <StyledSkillElement>
      {icon}
      <Paragraph>{name}</Paragraph>
    </StyledSkillElement>
  );

  return (
    <ul className="technologies-container">
      {TECHNOLOGIES.map(({ name, icon: Icon }) => (
        <SkillElement key={name} name={name} icon={<Icon />} />
      ))}
    </ul>
  );
};

export default Technologies;
