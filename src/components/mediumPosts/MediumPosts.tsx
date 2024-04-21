import { TMediumPost } from "../../models";
import { RegularList, Section, Typography } from "../common";
import { PostListItem } from "./components";
import { MEDIUM_POSTS } from "./const";
import { MediumPostsContainer, Description, Avatar } from "./styled";
import PeaceAvatar from "../../assets/avatars/peace-avatar.png";
import PeaceAvatarLight from "../../assets/avatars/peace-avatar-light.png";
import { useTheme } from "styled-components";

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
        <div>
          <Paragraph>
            I really enjoy reading Medium posts about programming. I think it's
            a great way to learn and stay updated.
          </Paragraph>
        </div>
        <Avatar src={theme.key === "light" ? PeaceAvatarLight : PeaceAvatar} />
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
