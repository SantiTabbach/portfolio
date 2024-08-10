import React, { Fragment, PropsWithChildren } from 'react';
import { Content, Header, Pane } from './StyledContainer';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
	const [header, left, right] = React.Children.toArray(children);

	return (
		<Fragment>
			<Header>{header}</Header>
			<Content>
				<Pane>{left}</Pane>
				<Pane>{right}</Pane>
			</Content>
		</Fragment>
	);
};

export default Container;
