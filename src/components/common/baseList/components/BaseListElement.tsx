import React from "react";
import {
  StyledListElementContainer,
  StyledFooterContainer,
} from "./StyledBaseListElement";
import GlassBox from "../../glassBox/GlassBox";
import { StyledTag } from "../../../commonStyled";

type GlassBoxProps = React.ComponentProps<typeof GlassBox>;

interface IBaseListElement extends GlassBoxProps {
  children: React.ReactNode;
  tags: string[];
}

const BaseListElement: React.FC<IBaseListElement> = ({
  title,
  tags,
  children,
}) => {
  const Tags = ({ tags }: { tags: string[] }) => {
    return (
      <StyledFooterContainer>
        {tags.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledFooterContainer>
    );
  };

  return (
    <StyledListElementContainer title={title} footer={<Tags tags={tags} />}>
      {children}
    </StyledListElementContainer>
  );
};

export default BaseListElement;
