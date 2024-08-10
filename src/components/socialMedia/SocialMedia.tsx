import { BaseList, GlassBox } from '../common';

import { SocialMediaContainer, ListWrapper } from './StyledSocialMedia';

import { SOCIAL_MEDIA } from './helper/const';
import MediaListItem, { IMediaListItem } from './components/MediaListItem';
import { ISocialMedia } from '@/models';
import { GlassBoxType } from '../common/glassBox/models/glassBox';
import { LIST_RESOURCES } from '@/enums/lists';

const SocialMedia = () => {
	return (
		<SocialMediaContainer>
			<GlassBox type={GlassBoxType.ACTIVE}>
				<ListWrapper>
					<BaseList<ISocialMedia, IMediaListItem>
						items={SOCIAL_MEDIA}
						resourceName={LIST_RESOURCES.media}
						itemComponent={MediaListItem}
					/>
				</ListWrapper>
			</GlassBox>
		</SocialMediaContainer>
	);
};

export default SocialMedia;
