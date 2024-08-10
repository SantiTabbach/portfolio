import { BaseList, GlassBox } from '../common';

import { SocialMediaContainer, ListWrapper } from './StyledSocialMedia';

import { SOCIAL_MEDIA } from './helper/const';
import MediaListItem, { IMediaListItem } from './components/MediaListItem';
import { ISocialMedia } from '@/models';

const SocialMedia = () => {
	return (
		<SocialMediaContainer>
			<GlassBox active>
				<ListWrapper>
					<BaseList<ISocialMedia, IMediaListItem>
						items={SOCIAL_MEDIA}
						resourceName="media"
						itemComponent={MediaListItem}
					/>
				</ListWrapper>
			</GlassBox>
		</SocialMediaContainer>
	);
};

export default SocialMedia;
