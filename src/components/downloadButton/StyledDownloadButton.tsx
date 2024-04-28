import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 10px;
  width: fit-content;
  border: 1.5px solid transparent;
  border-radius: 10px;
  ${({ theme }) => `background-color: ${theme.secondary}`};
  transition: background 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    transition: border 0.2s ease-in-out;

    background-color: #76abae26;
    ${({ theme }) => `border: 1.5px solid ${theme.primary}`};
  }
`;

export const StyledTitleLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.subtitle};
  font-size: 16px;
  margin-right: 10px;
`;
