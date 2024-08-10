import { sendSocialMediaEvent } from '@/utils/analytics';

import { MediaItem } from './StyledMediaListItem';
import { ISocialMedia } from '@/models';

export interface IMediaListItem {
	media: ISocialMedia;
}

const MediaListItem: React.FC<IMediaListItem> = ({ media }) => {
	const { url, title, icon: Icon } = media;

	return (
		<MediaItem
			target="_blank"
			rel="noopener noreferrer"
			key={url}
			href={url}
			title={title}
			onClick={() => sendSocialMediaEvent({ label: title })}
		>
			<Icon />
		</MediaItem>
	);
};

export default MediaListItem;
