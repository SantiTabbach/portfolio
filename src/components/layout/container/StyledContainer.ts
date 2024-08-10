import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	column-gap: 4rem;
	@media (max-width: 769px) {
		flex-direction: column;
	}
`;

export const Pane = styled.div`
	flex: 1;
`;

export const Header = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: start;
	margin-bottom: 25px;
`;
