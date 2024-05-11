import styled from "styled-components";

export const StyledTenchnologiesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 0 0;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const StyledTechnologyElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 128px;

  .technology-icon {
    height: 36px;
    transition: height 0.3s ease-in-out;
  }

  p {
    transition: font-size 0.3s ease-in-out;
  }

  &:hover {
    .technology-icon {
      transition: height 0.3s ease-in-out;
      height: 48px;
    }

    p {
      transition: font-size 0.3s ease-in-out;
      font-size: 21px;
    }
  }

  @media (max-width: 400px) {
    width: 33.33%;
  }
`;
