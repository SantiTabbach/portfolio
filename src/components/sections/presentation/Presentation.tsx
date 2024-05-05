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
        Currently developing new features for a USA healthcare project at{" "}
        <Link href="https://intive.com/es">Intive</Link>
      </Paragraph>
      <DownloadButton />
    </Section>
  );
};

export default Presentation;
