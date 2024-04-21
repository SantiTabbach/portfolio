import styled from "styled-components";

export const StyledSkillElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100px;
  padding-bottom: 20px;

  .technology-icon {
    width: 36px;
  }

  @media (max-width: 481px) {
    width: 50%;
    height: 50px;
    flex-direction: row;
    justify-content: left;
    padding-bottom: 0;

    p {
      margin-left: 15px;
    }

    .technology-icon {
      width: 24px;
    }
  }
`;
