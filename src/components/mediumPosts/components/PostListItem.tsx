import { TMediumPost, TTopics } from "../../../models";
import { ThemeConfig } from "../../../theme/Theme";
import { Typography } from "../../common";
import {
  PostContainer,
  TitleLink,
  TopicElement,
  TopicsContainer,
} from "./styled";

const { Paragraph } = Typography;

interface IPostListItem {
  post: TMediumPost;
}

interface ITopicsList {
  topics: TTopics;
}

const PostListItem: React.FC<IPostListItem> = ({ post }) => {
  const { title, url, description, topics } = post;

  const Topics = ({ topics }: ITopicsList) => {
    return (
      <TopicsContainer>
        {topics.map((topic) => (
          <TopicElement
            key={topic}
            color={ThemeConfig.dark.primary}
            fontWeight="400"
            fontSize="14"
          >
            {topic}
          </TopicElement>
        ))}
      </TopicsContainer>
    );
  };

  return (
    <PostContainer
      key={title}
      title={
        <TitleLink target="_blank" href={url}>
          {title}
        </TitleLink>
      }
      footer={<Topics topics={topics} />}
    >
      <Paragraph fontSize="14">{description}</Paragraph>
    </PostContainer>
  );
};

export default PostListItem;
