import styled from "styled-components";

export const StyledProjectDescription = styled.div`
  display: flex;

  @media (max-width: 1120px) and (min-width: 770px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;
