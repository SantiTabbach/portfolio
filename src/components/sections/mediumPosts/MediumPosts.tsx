import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();

	return (
		<Section title={t('posts.title')}>
			<Description>
				<Paragraph>{t('posts.description1')}</Paragraph>
				<Avatar alt="santi tabbach memoji" src={avatar[theme]} />
			</Description>
			<Paragraph>{t('posts.description2')}</Paragraph>
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
