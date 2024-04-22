import { ThemeProvider } from "styled-components";
import {
  Technologies,
  Typography,
  MediumPosts,
  Section,
  SocialMedia,
  Header,
  Content,
} from "./components";
import { ThemeConfig } from "./theme/Theme";
import { useTheme } from "./theme/hooks/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";

const { Paragraph } = Typography;

//TODO: Move to another file
import styled from "styled-components";

const Bold = styled.b`
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

export const Link = styled.a`
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const LeftColumn = () => (
  <>
    <Section title="Hey! I'm Santi">
      <Paragraph>
        Passionate <Bold>SSR Software Engineer</Bold> with experience in{" "}
        <Bold>React</Bold> and <Bold>React Native</Bold>. Also deeply interested
        in <Bold>UX/UI design</Bold>.
      </Paragraph>
      <Paragraph>
        Currently developing new features for a USA healthcare project at{" "}
        <Link href="https://intive.com/es" target="_blank">
          Intive
        </Link>
        .
      </Paragraph>
    </Section>
    <Section title="Technologies that I use">
      <Technologies />
    </Section>
  </>
);

const RightColumn = () => <MediumPosts />;

function App() {
  const { theme, themeToggler } = useTheme();

  return (
    <ThemeProvider theme={ThemeConfig[theme]}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />
      <Content>
        <LeftColumn />
        <RightColumn />
      </Content>
      <SocialMedia />
    </ThemeProvider>
  );
}

export default App;
