import { TMediumPost } from "../../models";
import { RegularList, Section, Typography } from "../common";
import { PostListItem } from "./components";
import { MEDIUM_POSTS } from "./const";
import { MediumPostsContainer, Description, Avatar } from "./styled";
import PeaceAvatar from "../../assets/avatars/peace-avatar.png";
import PeaceAvatarLight from "../../assets/avatars/peace-avatar-light.png";
import { useTheme } from "styled-components";
import { Theme } from "../../theme/models/types";

const { Paragraph } = Typography;

interface IPostListItem {
  post: TMediumPost;
  key: number;
}

const MediumPosts = () => {
  const theme = useTheme();

  return (
    <Section title="Medium posts">
      <Description>
        <Paragraph>
          I find pleasure in reading programming articles on Medium during my
          free time. It's a great way to stay up to date on the latest trends.
        </Paragraph>
        <Avatar
          src={theme.key === Theme.LIGHT ? PeaceAvatarLight : PeaceAvatar}
        />
      </Description>
      <Paragraph>
        Occasionally, I also feel motivated to publish my own writings:
      </Paragraph>
      <MediumPostsContainer>
        <RegularList<TMediumPost, IPostListItem>
          items={MEDIUM_POSTS}
          resourceName="post"
          itemComponent={PostListItem}
        />
      </MediumPostsContainer>
    </Section>
  );
};

export default MediumPosts;
