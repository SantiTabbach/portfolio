import { TMediumPost } from '../../../../models';
import { sendMediumEvent } from '../../../../utils/analytics';
import { Link, Typography } from '../../../common';
import BaseListElement from '../../../common/baseList/components/BaseListElement';

const { Paragraph } = Typography;

interface IPostListItem {
	post: TMediumPost;
}

const PostListItem: React.FC<IPostListItem> = ({ post }) => {
	const { title, url, description, topics } = post;

	return (
		<BaseListElement
			tags={topics}
			title={
				<Link href={url} onClick={() => sendMediumEvent({ label: title })}>
					{title}
				</Link>
			}
		>
			<Paragraph fontSize="14">{description}</Paragraph>
		</BaseListElement>
	);
};

export default PostListItem;
