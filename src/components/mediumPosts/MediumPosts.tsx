import { TMediumPost } from "../../models";
import { RegularList, Section, Typography } from "../common";
import PostListItem from "./components/PostListItem";
import { MEDIUM_POSTS } from "./helper/const";
import {
  StyledMediumPostsContainer,
  StyledDescription,
  StyledAvatar,
} from "./StyledMediumPosts";
import PeaceAvatar from "../../assets/avatars/peace-avatar.png";
import PeaceAvatarLight from "../../assets/avatars/peace-avatar-light.png";
import { useTheme } from "styled-components";
import { Theme } from "../../models";

const { Paragraph } = Typography;

interface IPostListItem {
  post: TMediumPost;
  key: number;
}

const MediumPosts = () => {
  //TODO: Create context
  const theme = useTheme();

  return (
    <Section title="Medium posts">
      <StyledDescription>
        <Paragraph>
          I find pleasure in reading programming articles on Medium during my
          free time. It's a great way to stay up to date on the latest trends.
        </Paragraph>
        <StyledAvatar
          src={theme.key === Theme.LIGHT ? PeaceAvatarLight : PeaceAvatar}
        />
      </StyledDescription>
      <Paragraph>
        Occasionally, I also feel motivated to publish my own writings:
      </Paragraph>
      <StyledMediumPostsContainer>
        <RegularList<TMediumPost, IPostListItem>
          items={MEDIUM_POSTS}
          resourceName="post"
          itemComponent={PostListItem}
        />
      </StyledMediumPostsContainer>
    </Section>
  );
};

export default MediumPosts;
