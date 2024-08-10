import styled, { css } from 'styled-components';
import { GlassBoxType } from './models/glassBox';

export const Container = styled.div<{
	type: string;
}>`
	width: fit-content;
	padding: 15px 20px 15px 20px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0);
	transition: background 0.3s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.glassBox.active.background};
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: ${({ theme }) => theme.glassBox.active.border};
		box-shadow: ${({ theme }) => theme.glassBox.active.boxShadow};
	}

	${(props) =>
		props.type === GlassBoxType.ACTIVE &&
		css`
			background: ${({ theme }) => theme.glassBox.active.background};
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
			border: ${({ theme }) => theme.glassBox.active.border};
			box-shadow: ${({ theme }) => theme.glassBox.active.boxShadow};
		`}
`;
