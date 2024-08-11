import styled from 'styled-components';
import { StyledParagraph } from '@/components/common/typography/StyledTypography';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-top: 16px;
	padding-left: 10px;
	p {
		margin: 4px;
		padding-left: 4px;
	}
`;

export const Circle = styled.div`
	position: absolute;
	top: 10px;
	left: -5.5px;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	${({ theme }) => `background-color: ${theme.primary}`};
	margin-right: 12px;
`;

export const Line = styled.div`
	position: absolute;
	top: 10px;
	height: 100%;
	left: 0px;
	width: 1.5px;
	${({ theme }) => `background-color: ${theme.secondary}`};
`;

export const Skill = styled(StyledParagraph)`
	padding: 2px 12px 2px 12px !important;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 16px;
	max-width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.subtitle};
	font-weight: 300;
	font-size: 14px;
`;
