import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	gap: 4px;
	padding: 4px;
	border-radius: 24px;
	box-shadow: ${({ theme }) => theme.settings.shadow};
`;

export const Button = styled.button`
	color: ${({ theme }) => theme.icon};
	background-color: ${(props) => props.color ?? 'transparent'};
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	width: 36px;
	height: 36px;
	border-radius: 18px;
	transition: background-color 0.3s ease;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => !props.disabled && 'rgba(0, 0, 0, 0.1)'};
	}

	&:active {
		background-color: ${(props) => !props.disabled && 'rgba(0, 0, 0, 0.2)'};
	}
`;
