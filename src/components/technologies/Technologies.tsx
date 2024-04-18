import React from "react";
import { TECHNOLOGIES } from "../../consts";
import Typography from "../common/typography/Typography";
import "./Technologies.css";

interface ISkillElement {
  icon: string;
  name: string;
}

const { Paragraph } = Typography;

const Technologies: React.FC = () => {
  const SkillElement = ({ icon, name }: ISkillElement) => (
    <li className="skill-element">
      <img src={icon} className="skill-icon" alt={`${name}-icon`} />
      <Paragraph>{name}</Paragraph>
    </li>
  );

  return (
    <ul className="technologies-container">
      {TECHNOLOGIES.map(({ name, icon }) => (
        <SkillElement key={name} name={name} icon={icon} />
      ))}
    </ul>
  );
};

export default Technologies;
