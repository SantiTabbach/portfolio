import React from 'react';
import { useTranslation } from 'react-i18next';
import { TECHNOLOGIES } from '@/consts';
import TechnologyListItem, {
	ITechnologyListItem,
} from './components/TechnologyListItem';
import { BaseList, Section } from '@/components/common';
import { StyledTenchnologiesContainer } from './StyledTechnologies';
import { ITechnology } from '@/models/Technology';
import { LIST_RESOURCES } from '@/enums/lists';

const Technologies: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Section title={t('technologies.title')}>
			<StyledTenchnologiesContainer>
				<BaseList<ITechnology, ITechnologyListItem>
					items={TECHNOLOGIES}
					resourceName={LIST_RESOURCES.technology}
					itemComponent={TechnologyListItem}
				/>
			</StyledTenchnologiesContainer>
		</Section>
	);
};

export default Technologies;
