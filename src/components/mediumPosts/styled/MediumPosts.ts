import styled from "styled-components";

export const MediumPostsContainer = styled.div`
  max-height: 400px;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 520px) and (min-width: 400px) {
    align-items: start;
    flex-direction: row;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    align-items: start;
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 120px;
  margin: 25px;
  margin-top: 16px;

  @media (max-width: 520px) and (min-width: 400px) {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    margin-bottom: 0;
  }
`;
