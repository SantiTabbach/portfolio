import styled from "styled-components";

export const StyledMediumPostsContainer = styled.div`
  max-height: 400px;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
