import styled from 'styled-components';

export const StyledLink = styled.a`
	display: inline;
	margin-right: 19px;
	position: relative;
	text-decoration: none;
	font-size: ${({ style }) => style?.fontSize ?? '16'}px;
	font-weight: ${({ style }) => style?.fontWeight ?? 400};
	font-size: ${({ style }) => style?.fontWeight ?? 16}px;
	color: ${({ theme }) => theme.subtitle};
	transition: color 0.2s ease-in-out;

	.arrow {
		position: absolute;
		margin-left: 4px;
		transform: rotate(-45deg);
		transition: transform 0.3s ease;
	}

	&:hover {
		transition: color 0.2s ease-in-out;
		color: ${({ theme }) => theme.primary};

		.arrow {
			transform: translateX(3px) translateY(-3px) rotate(-45deg);
		}
	}
`;
