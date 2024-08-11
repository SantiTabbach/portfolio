import { ISocialMedia } from '@/models';
import { LIST_RESOURCES, GlassBoxType } from '@/enums';
import { SOCIAL_MEDIA } from '@/constants';
import { BaseList, GlassBox } from '@/components';
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
