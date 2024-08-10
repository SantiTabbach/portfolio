import React from 'react';
import { Container, Footer } from './StyledBaseListElement';
import GlassBox from '@/components/common/glassBox/GlassBox';

import Tags from './components/Tags';
import { Tag } from '@/components/commonStyled';

type GlassBoxProps = React.ComponentProps<typeof GlassBox>;

interface IBaseListElement extends GlassBoxProps {
	tags: string[];
}

const BaseListElement: React.FC<IBaseListElement> = ({ tags, children }) => {
	return (
		<Container>
			{children}
			<Footer>
				<Tags tags={tags} renderItem={Tag} />
			</Footer>
		</Container>
	);
};

export default BaseListElement;
