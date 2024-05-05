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
  align-items: center;
  width: 25%;
  height: 100px;
  padding-bottom: 20px;

  .technology-icon {
    height: 36px;
  }

  @media (max-width: 400px) {
    width: 33.33%;

    .technology-icon {
      height: 60px;
    }
  }
`;
