import { Link, Section, Typography } from "../../common";
import { StyledBold } from "../../commonStyled";
import DownloadButton from "../../downloadButton/DownloadButton";

const { Paragraph } = Typography;

const Presentation = () => {
  return (
    <Section title="Hey! I'm Santi">
      <Paragraph>
        Passionate <StyledBold>SSR Software Developer</StyledBold> with
        experience in <StyledBold>React</StyledBold> and{" "}
        <StyledBold>React Native</StyledBold>. Also deeply interested in{" "}
        <StyledBold>UX/UI design</StyledBold>.
      </Paragraph>
      <Paragraph>
        Currently developing new features for an Argentinian healthcare project
        at <Link href="https://www.codeait.com/es">CodeaIT</Link>
      </Paragraph>
      <DownloadButton />
    </Section>
  );
};

export default Presentation;
