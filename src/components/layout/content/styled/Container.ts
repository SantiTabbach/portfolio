import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 40px;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
