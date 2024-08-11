import React, { ElementType } from 'react';
import { Container } from './StyledTags';
import BaseList from '../../BaseList';

interface ITags {
	tags: string[];
	renderItem: ElementType;
}

interface ITagItem {
	tag: string;
}

const Tags: React.FC<ITags> = ({ tags, renderItem: TagComponent }) => {
	const TagItem: React.FC<ITagItem> = ({ tag }) => {
		return <TagComponent>{tag}</TagComponent>;
	};

	return (
		<Container>
			<BaseList<string, ITagItem>
				resourceName="tag"
				items={tags}
				itemComponent={TagItem}
			/>
		</Container>
	);
};

export default Tags;
