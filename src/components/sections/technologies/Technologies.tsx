import React from 'react';
import { useTranslation } from 'react-i18next';
import TechnologyListItem, {
	ITechnologyListItem,
} from './components/TechnologyListItem';
import { BaseList, Section } from '@/components/common';
import { ITechnology } from '@/models';
import { LIST_RESOURCES } from '@/enums';
import { TECHNOLOGIES } from '@/constants';
import { StyledTenchnologiesContainer } from './StyledTechnologies';

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
