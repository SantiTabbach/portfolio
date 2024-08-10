import styled from 'styled-components';

interface IStyledTypography {
	color?: string;
	fontWeight?: string;
	fontSize?: string;
}

export const StyledTitle = styled.p<IStyledTypography>`
	margin: 0;
	color: ${({ color, theme }) => color ?? theme.primary};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const StyledSubtitle = styled.p<IStyledTypography>`
	margin: 0;
	color: ${({ color, theme }) => color ?? theme.subtitle};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const StyledParagraph = styled.p<IStyledTypography>`
	color: ${({ color, theme }) => color ?? theme.text};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => `${fontSize}px`};
`;
