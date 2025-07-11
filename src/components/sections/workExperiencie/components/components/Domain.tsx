import { Tag } from '@/components/commonStyled';
import { Domain } from '@/models';
import React from 'react';
import { Container } from './StyledDomain';

interface Props {
	domain: Domain[];
}

const DomainComponent: React.FC<Props> = ({ domain }) => {
	return (
		<Container>
			{domain.map((d) => (
				<Tag
					style={{ width: 'fit-content', padding: '2px 10px 2px 10px' }}
					fontWeight="400"
					fontSize="14"
					key={d}
				>
					{d}
				</Tag>
			))}
		</Container>
	);
};

export default DomainComponent;
