import styled from "styled-components";

export const StyledDescription = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 1120px) and (min-width: 770px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;
