import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 16px;
  padding-left: 10px;
  p {
    margin: 4px;
    padding-left: 4px;
  }
`;

export const StyledSummary = styled.p`
  font-weight: 200;
  font-size: 14px;
`;

export const StyledCircle = styled.div`
  position: absolute;
  top: 10px;
  left: -5.5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${({ theme }) => `background-color: ${theme.primary}`};
  margin-right: 12px;
`;

export const StyledLine = styled.div`
  position: absolute;
  top: 10px;
  height: 100%;
  left: 0px;
  width: 1.5px;
  ${({ theme }) => `background-color: ${theme.secondary}`};
`;
