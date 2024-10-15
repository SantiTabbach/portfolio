import React from 'react';
import TechnologyListItem, {
	ITechnologyListItem,
} from './components/TechnologyListItem';
import { BaseList, Section } from '@/components/common';
import { ITechnology } from '@/models';
import { LIST_RESOURCES } from '@/enums';
import { TECHNOLOGIES } from '@/constants';
import { StyledTenchnologiesContainer } from './StyledTechnologies';

const Technologies: React.FC = () => {
	return (
		<Section title="Technologies that I use">
			<StyledTenchnologiesContainer>
				<BaseList<ITechnology, ITechnologyListItem>
					items={TECHNOLOGIES}
					resourceName={LIST_RESOURCES.technology}
					itemComponent={TechnologyListItem}
					keyExtractor={({ name }) => name}
				/>
			</StyledTenchnologiesContainer>
		</Section>
	);
};

export default Technologies;
