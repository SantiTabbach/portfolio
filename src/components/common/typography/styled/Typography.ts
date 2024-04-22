import styled from "styled-components";

interface IStyledTypography {
  color?: string;
  fontWeight?: string;
}

export const StyledTitle = styled.p<IStyledTypography>`
  color: ${({ theme }) => theme.primary};
  font-weight: ${(props) => props.fontWeight || 400};
  margin: 0;
  font-size: 48px;
`;

export const StyledSubtitle = styled.p<IStyledTypography>`
  color: ${({ theme }) => theme.subtitle};
  font-weight: ${(props) => props.fontWeight || 400};
  margin: 0;
  font-size: 20px;
`;

export const StyledParagraph = styled.p<IStyledTypography>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight || 200};
  font-size: 16px;
`;
