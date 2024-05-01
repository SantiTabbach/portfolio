import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: ${({ style }) => style?.fontWeight || 400};
  font-size: ${({ style }) => style?.fontWeight || 16}px;
  color: ${({ theme }) => theme.subtitle};
  transition: color 0.2s ease-in-out;

  &:hover {
    transition: color 0.2s ease-in-out;
    color: ${({ theme }) => theme.primary};
  }
`;
