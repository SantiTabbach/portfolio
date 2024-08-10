import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { TMediumPost, Theme } from '@/models';
import PostListItem from './components/PostListItem';
import { Avatar, Description, ListWrapper } from '@/components/commonStyled';
import { BaseList, Section, Typography } from '@/components/common';
import PeaceAvatarDark from '@/assets/avatars/peace-avatar.png';
import PeaceAvatarLight from '@/assets/avatars/peace-avatar-light.png';
import { MEDIUM_POSTS } from './helper/const';

const { Paragraph } = Typography;

interface IPostListItem {
	post: TMediumPost;
}

const avatar = {
	[Theme.LIGHT]: PeaceAvatarLight,
	[Theme.DARK]: PeaceAvatarDark,
};

const MediumPosts = () => {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Section title={t('posts.title')}>
			<Description>
				<Paragraph>{t('posts.description1')}</Paragraph>
				<Avatar alt="santi tabbach memoji" src={avatar[theme.key as Theme]} />
			</Description>
			<Paragraph>{t('posts.description2')}</Paragraph>
			<ListWrapper>
				<BaseList<TMediumPost, IPostListItem>
					items={MEDIUM_POSTS}
					resourceName="post"
					itemComponent={PostListItem}
				/>
			</ListWrapper>
		</Section>
	);
};

export default MediumPosts;
