import {
  Technologies,
  Typography,
  MediumPosts,
  Section,
  SocialMedia,
} from "./components";
import "./App.css";

const { Title, Subtitle, Paragraph } = Typography;

function App() {
  return (
    <div>
      <div className="main-container">
        <div className="col">
          <Section>
            <>
              <Title>Santi Tabbach</Title>
              <Subtitle>SSR React Developer</Subtitle>
              <Paragraph>
                Currently contributing to the implementation of new
                functionalities for a USA healthcare project. Simultaneously
                working on my thesis for software engineering degree.
              </Paragraph>
            </>
          </Section>
          <Section title="About me">
            <>
              <Paragraph>
                Passionate SSR software engineer specialized in frontend
                development with experience in React and React Native.
              </Paragraph>
              <Paragraph>
                While I love frontend development, I also have a strong interest
                in and recognize the importance of UX/UI design. Currently, I am
                honing my technologies in this area using Figma as a design tool
                and applying design patterns, Nielsen heuristics, Shneiderman's
                Golden Rules, among others.
              </Paragraph>
            </>
          </Section>
          <Section title="Technologies that I love">
            <Technologies />
          </Section>
        </div>
        <div className="col">
          <Section title="Medium posts">
            <MediumPosts />
          </Section>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

export default App;
