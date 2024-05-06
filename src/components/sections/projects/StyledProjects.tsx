import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
  max-height: 300px;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  margin-top: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
