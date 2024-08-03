import { PropsWithChildren } from 'react';
import { StyledLink } from './StyledLink';

interface ILink extends PropsWithChildren {
	href: string;
	style?: object;
	onClick?: () => void;
}

const Link: React.FC<ILink> = ({ children, ...props }) => {
	return (
		<StyledLink target="_blank" {...props}>
			<span style={{ display: 'inline-block' }}>
				{children}
				<span className="arrow">&rarr;</span>
			</span>
		</StyledLink>
	);
};

export default Link;
