import styled from 'styled-components';
import { StyledParagraph } from '../common/typography/StyledTypography';

export const Tag = styled(StyledParagraph)`
	padding: 2px 12px 2px 12px;
	margin: 5px;
	background-color: #76abae26;
	border-radius: 16px;
	max-width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.primary};
	font-weight: 400;
	font-size: 14px;
`;
