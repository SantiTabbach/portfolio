import styled from "styled-components";

export const StyledMediumPostsContainer = styled.div`
  max-height: 400px;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

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

export const StyledAvatar = styled.img`
  width: 150px;
  height: 120px;
  margin-top: 16px;
  @media (max-width: 1120px) and (min-width: 770px) {
    margin: 16px;
  }

  @media (max-width: 520px) {
    margin: 16px;
  }
`;
