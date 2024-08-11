import { Typography } from '@/components';
import { StyledTechnologyElement } from '../StyledTechnologies';
import { ITechnology } from '@/models';

const { Paragraph } = Typography;

export interface ITechnologyListItem {
	technology: ITechnology;
}

const TechnologyListItem = ({ technology }: ITechnologyListItem) => {
	const { icon: Icon, name } = technology;
	return (
		<StyledTechnologyElement>
			<Icon />
			<Paragraph>{name}</Paragraph>
		</StyledTechnologyElement>
	);
};

export default TechnologyListItem;
