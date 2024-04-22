import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  column-gap: 40px;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const StyledPane = styled.div`
  flex: 1;
`;
