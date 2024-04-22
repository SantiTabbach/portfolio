import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  margin-bottom: 25px;
`;

export const StyledSantiContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledAvatar = styled.img`
  width: 150px;
  margin-right: 25px;

  @media (max-width: 520px) {
    margin: 25px 0 25px 0;
  }
`;

export const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  @media (max-width: 520px) {
    flex-direction: row;
    p {
      margin-right: 10px;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-content: center;
    text-align: center;
    p {
      margin-right: 0;
    }
  }
`;
