import styled from "styled-components";

export const StyledLink = styled.a`
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;
