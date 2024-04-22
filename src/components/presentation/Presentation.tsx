import { Section, Typography } from "../common";
import { StyledBold, StyledLink } from "../commonStyled";

const { Paragraph } = Typography;

const Presentation = () => {
  return (
    <Section title="Hey! I'm Santi">
      <Paragraph>
        Passionate <StyledBold>SSR Software Engineer</StyledBold> with
        experience in <StyledBold>React</StyledBold> and{" "}
        <StyledBold>React Native</StyledBold>. Also deeply interested in{" "}
        <StyledBold>UX/UI design</StyledBold>.
      </Paragraph>
      <Paragraph>
        Currently developing new features for a USA healthcare project at{" "}
        <StyledLink href="https://intive.com/es" target="_blank">
          Intive
        </StyledLink>
        .
      </Paragraph>
    </Section>
  );
};

export default Presentation;
