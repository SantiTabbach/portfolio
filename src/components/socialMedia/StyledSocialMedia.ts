import styled from "styled-components";

export const StyledSocialMediaContainer = styled.div`
  bottom: 40px;
  position: sticky;

  @media (max-width: 520px) {
    text-align: -webkit-center;
  }
`;

export const StyledSocialMediaContent = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`;

export const StyledMediaBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
