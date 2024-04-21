import styled from "styled-components";

export const MediumPostsContainer = styled.div`
  max-height: 400px;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  box-shadow: inset 0 4px 40px 0 rgba(0, 0, 0, 0.8);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 520px) and (min-width: 400px) {
    flex-direction: row;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 136.6px;
  margin: 25px;
  margin-top: 0;

  @media (max-width: 520px) and (min-width: 400px) {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    margin-bottom: 0;
  }
`;
