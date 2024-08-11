import { sendSocialMediaEvent } from '@/utils/analytics';
import { ISocialMedia } from '@/models';
import { MediaItem } from './StyledMediaListItem';

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
