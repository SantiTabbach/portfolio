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
  flex-direction: row;
  align-items: center;

  @media (max-width: 481px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 136.6px;
  margin: 25px;
`;
