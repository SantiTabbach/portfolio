import React, { ElementType } from 'react';
import { Container } from './StyledTags';

interface ITags {
	tags: string[];
	renderItem: ElementType;
}

const Tags: React.FC<ITags> = ({ tags, renderItem: TagComponent }) => {
	return (
		<Container>
			{tags.map((tag) => (
				<TagComponent key={tag}>{tag}</TagComponent>
			))}
		</Container>
	);
};

export default Tags;
