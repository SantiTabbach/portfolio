import styled from "styled-components";

export const StyledMediumPostsContainer = styled.div`
  max-height: 300px;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
