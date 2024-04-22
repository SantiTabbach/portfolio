import { styled } from "styled-components";

export const SettingsBox = styled.div`
  display: flex;
  border-radius: 24px;
  padding: 4px;
  height: fit-content;
  width: fit-content;
  box-shadow: ${({ theme }) => theme.settings.shadow};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.icon};
  background-color: ${(props) => props.color || "transparent"};
  display: flex;
  border: none;
  width: 36px;
  height: 36px;
  padding: 2px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => !props.disabled && "rgba(0, 0, 0, 0.1)"};
  }

  &:active {
    background-color: ${(props) => !props.disabled && "rgba(0, 0, 0, 0.2)"};
  }
`;
