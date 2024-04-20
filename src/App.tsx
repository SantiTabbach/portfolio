import React from "react";
import {
  Technologies,
  Typography,
  MediumPosts,
  Section,
  SocialMedia,
  Header,
  Content,
} from "./components";

const { Paragraph, Subtitle } = Typography;

const LeftColumn = () => (
  <>
    <Section>
      <Subtitle fontWeight="100">SSR React Developer</Subtitle>
      <Paragraph>
        Currently contributing to the implementation of new functionalities for
        a USA healthcare project. Simultaneously working on my thesis for
        software engineering degree.
      </Paragraph>
    </Section>
    <Section title="About me">
      <Paragraph>
        Passionate <b>SSR software engineer</b> specialized in frontend
        development with experience in <b>React</b> and <b>React Native</b>.
      </Paragraph>
      <Paragraph>
        While I love frontend development, I also have a strong interest in and
        recognize the importance of <b>UX/UI design</b>. Currently, I am honing
        my technologies in this area using Figma as a design tool and applying
        design patterns, Nielsen heuristics, Shneiderman's Golden Rules, among
        others.
      </Paragraph>
    </Section>
    <Section title="Technologies that I use">
      <Technologies />
    </Section>
  </>
);

const RightColumn = () => (
  <Section title="Medium posts">
    <MediumPosts />
  </Section>
);

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <LeftColumn />
        <RightColumn />
      </Content>
      <SocialMedia />
    </React.Fragment>
  );
}

export default App;
