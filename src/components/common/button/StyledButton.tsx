import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px 5px 10px;
	gap: 10px;
	border: 1.5px solid transparent;
	border-radius: 10px;
	${({ theme }) => `background-color: ${theme.secondary}`};
	transition: background 0.2s ease-in-out;
	transition: border 0.2s ease-in-out;

	&:hover {
		cursor: pointer;
		transition: background 0.2s ease-in-out;
		transition: border 0.2s ease-in-out;

		background-color: #76abae26;
		${({ theme }) => `border: 1.5px solid ${theme.primary}`};
	}
`;
