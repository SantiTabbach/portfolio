import { Link, Typography } from '@/components';
import BaseListElement from '@/components/common/baseList/components/BaseListElement';
import { IMediumPost } from '@/models';
import { sendMediumEvent } from '@/utils/analytics';

const { Paragraph } = Typography;

export interface IPostListItem {
	post: IMediumPost;
}

const PostListItem: React.FC<IPostListItem> = ({ post }) => {
	const { title, url, description, topics } = post;

	return (
		<BaseListElement tags={topics}>
			<Link href={url} onClick={() => sendMediumEvent({ label: title })}>
				{title}
			</Link>
			<Paragraph fontSize="14">{description}</Paragraph>
		</BaseListElement>
	);
};

export default PostListItem;
