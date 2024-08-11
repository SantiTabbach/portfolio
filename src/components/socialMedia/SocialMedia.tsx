import { ISocialMedia } from '@/models';
import { LIST_RESOURCES } from '@/enums';
import { SOCIAL_MEDIA } from '@/constants/socialMedia';
import { BaseList, GlassBox } from '../common';
import { GlassBoxType } from '../common/glassBox/models/glassBox';
import { SocialMediaContainer, ListWrapper } from './StyledSocialMedia';
import MediaListItem, { IMediaListItem } from './components/MediaListItem';

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
