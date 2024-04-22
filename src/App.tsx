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

import styled from "styled-components";

const Bold = styled.b`
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const LeftColumn = () => (
  <>
    <Section title="About me">
      <Paragraph>
        Passionate <Bold>SSR Software Developer</Bold> with experience in{" "}
        <Bold>React</Bold> and <Bold>React Native</Bold>. Also deeply interested
        in <Bold>UX/UI design</Bold>.
      </Paragraph>
      <Paragraph>
        Currently developing new features for a USA healthcare project and
        working on my thesis for software engineering degree.
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
