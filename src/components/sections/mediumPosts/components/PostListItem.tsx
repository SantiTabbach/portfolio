import { useTheme } from "styled-components";
import { TMediumPost, TTopics } from "../../../../models";
import { Link, Typography } from "../../../common";
import {
  StyledPostContainer,
  StyledTopicElement,
  StyledTopicsContainer,
} from "./StyledPostListItem";

const { Paragraph } = Typography;

interface IPostListItem {
  post: TMediumPost;
}

interface ITopicsList {
  topics: TTopics;
}

const PostListItem: React.FC<IPostListItem> = ({ post }) => {
  const theme = useTheme();

  const { title, url, description, topics } = post;

  const Topics = ({ topics }: ITopicsList) => {
    return (
      <StyledTopicsContainer>
        {topics.map((topic) => (
          <StyledTopicElement
            key={topic}
            color={theme.primary}
            fontWeight="400"
            fontSize="14"
          >
            {topic}
          </StyledTopicElement>
        ))}
      </StyledTopicsContainer>
    );
  };

  return (
    <StyledPostContainer
      title={<Link href={url}>{title}</Link>}
      footer={<Topics topics={topics} />}
    >
      <Paragraph fontSize="14">{description}</Paragraph>
    </StyledPostContainer>
  );
};

export default PostListItem;
