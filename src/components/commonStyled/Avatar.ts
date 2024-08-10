import styled from 'styled-components';

export const Avatar = styled.img`
	width: 112.5px;
	height: 90px;
	margin-top: 16px;
	@media (max-width: 1120px) and (min-width: 770px) {
		margin: 16px;
	}

	@media (max-width: 520px) {
		width: 125px;
		height: 100px;
		margin: 16px;
	}
`;
