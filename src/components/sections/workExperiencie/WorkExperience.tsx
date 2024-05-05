/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { formatShortDate, getElapsedTime } from "../../../utils/utils";
import { Section } from "../../common";
import ExperienceItem from "./components/ExperienceItem";
import { StyledLine } from "./components/StyledExperienceItem";
import { WORK_EXPERIENCE } from "./consts";

const calculateFormattedTime = (time: string) => {
  const [start, end] = time.split(" - ");

  const calcTime = getElapsedTime(start, end);
  return `${formatShortDate(start)} - ${formatShortDate(end)} · ${calcTime}`;
};

const WorkExperience = () => {
  return (
    <Section title="Work experience">
      <div style={{ position: "relative" }}>
        <StyledLine />
        {WORK_EXPERIENCE.map((item, index) => {
          const { time, ...rest } = item;
          const formattedTime = calculateFormattedTime(time);

          return <ExperienceItem key={index} time={formattedTime} {...rest} />;
        })}
      </div>
    </Section>
  );
};

export default React.memo(WorkExperience);
