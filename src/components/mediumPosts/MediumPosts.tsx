import { TTopics } from "../../models";
import { GlassBox, Typography } from "../common";
import { MEDIUM_POSTS } from "./const";
import "./MediumPosts.css";

const { Paragraph } = Typography;

const MediumPosts = () => {
  const Topics = ({ topics }: { topics: TTopics }) => {
    return (
      <div className="topics-container">
        {topics.map((topic) => (
          <div className="topic-element" key={topic}>
            <Paragraph color="#4bffbe">{topic}</Paragraph>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="medium-posts-container">
      {MEDIUM_POSTS.map(({ title, url, description, topics }) => (
        <GlassBox
          key={title}
          title={
            <a target="_blank" href={url}>
              {title}
            </a>
          }
          footer={<Topics topics={topics} />}
        >
          <Paragraph>{description}</Paragraph>
        </GlassBox>
      ))}
    </div>
  );
};

export default MediumPosts;
