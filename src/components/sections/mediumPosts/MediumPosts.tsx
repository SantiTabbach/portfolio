import { TMediumPost } from '../../../models';
import { BaseList, Section, Typography } from '../../common';
import PostListItem from './components/PostListItem';
import { MEDIUM_POSTS } from './helper/const';
import PeaceAvatar from '../../../assets/avatars/peace-avatar.png';
import PeaceAvatarLight from '../../../assets/avatars/peace-avatar-light.png';
import { useTheme } from 'styled-components';
import { Theme } from '../../../models';
import {
	StyledAvatar,
	StyledDescription,
	StyledListWrapper,
} from '../../commonStyled';
import useTranslation from '../../../hooks/useTranslation';

const { Paragraph } = Typography;

interface IPostListItem {
	post: TMediumPost;
	key: number;
}

const MediumPosts = () => {
	//TODO: Create context
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Section title={t('posts.title')}>
			<StyledDescription>
				<Paragraph>{t('posts.description1')}</Paragraph>
				<StyledAvatar
					alt="santi tabbach memoji"
					src={theme.key === Theme.LIGHT ? PeaceAvatarLight : PeaceAvatar}
				/>
			</StyledDescription>
			<Paragraph>{t('posts.description2')}</Paragraph>
			<StyledListWrapper>
				<BaseList<TMediumPost, IPostListItem>
					items={MEDIUM_POSTS}
					resourceName="post"
					itemComponent={PostListItem}
				/>
			</StyledListWrapper>
		</Section>
	);
};

export default MediumPosts;
