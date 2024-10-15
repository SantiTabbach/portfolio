import { IMediumPost } from '@/models';
import PostListItem, { IPostListItem } from './components/PostListItem';
import { Avatar, Description, ListWrapper } from '@/components/commonStyled';
import { BaseList, Section, Typography } from '@/components';
import PeaceAvatarDark from '@/assets/avatars/peace-avatar.png';
import PeaceAvatarLight from '@/assets/avatars/peace-avatar-light.png';
import { LIST_RESOURCES, THEME } from '@/enums';
import { MEDIUM_POSTS } from '@/constants';
import { useTheme } from '@/contexts/ThemeContext';

const { Paragraph } = Typography;

const avatar = {
	[THEME.LIGHT]: PeaceAvatarLight,
	[THEME.DARK]: PeaceAvatarDark,
};

const MediumPosts = () => {
	const { theme } = useTheme();

	return (
		<Section title="Medium posts">
			<Description>
				<Paragraph>
					I find pleasure in reading programming articles on Medium during my
					free time. It's a great way to stay up to date on the latest trends.
				</Paragraph>
				<Avatar alt="santi tabbach memoji" src={avatar[theme]} />
			</Description>
			<Paragraph>
				Occasionally, I also feel motivated to publish my own writings:
			</Paragraph>
			<ListWrapper>
				<BaseList<IMediumPost, IPostListItem>
					items={MEDIUM_POSTS}
					resourceName={LIST_RESOURCES.post}
					itemComponent={PostListItem}
					keyExtractor={({ url }) => url}
				/>
			</ListWrapper>
		</Section>
	);
};

export default MediumPosts;
