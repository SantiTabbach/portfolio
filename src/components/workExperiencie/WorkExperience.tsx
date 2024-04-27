import { Section } from "../common";
import ExperienceItem from "./components/ExperienceItem";
import { StyledLine } from "./components/StyledExperienceItem";
import { WORK_EXPERIENCE } from "./consts";

const WorkExperience = () => {
  return (
    <Section title="Work experience">
      <div style={{ position: "relative" }}>
        <StyledLine />
        {WORK_EXPERIENCE.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;
