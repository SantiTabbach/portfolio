import { TMediumPost } from "../../models";
import { RegularList } from "../common";
import { PostListItem } from "./components";
import { MEDIUM_POSTS } from "./const";
import { MediumPostsContainer } from "./styled";

interface IPostListItem {
  post: TMediumPost;
  key: number;
}

const MediumPosts = () => {
  return (
    <MediumPostsContainer>
      <RegularList<TMediumPost, IPostListItem>
        items={MEDIUM_POSTS}
        resourceName="post"
        itemComponent={PostListItem}
      />
    </MediumPostsContainer>
  );
};

export default MediumPosts;
