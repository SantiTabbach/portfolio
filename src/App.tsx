import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Technologies,
  MediumPosts,
  SocialMedia,
  Header,
  Content,
  Presentation,
} from "./components";
import { ThemeConfig } from "./theme/Theme";
import { useTheme } from "./theme/hooks/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import WorkExperience from "./components/workExperiencie/WorkExperience";

const LeftColumn = () => (
  <React.Fragment>
    <Presentation />

    <WorkExperience />
    <Technologies />
  </React.Fragment>
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
