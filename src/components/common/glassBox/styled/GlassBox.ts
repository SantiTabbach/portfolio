import styled, { css } from "styled-components";

export const GlassBoxContainer = styled.div<{
  active?: boolean;
}>`
  width: fit-content;
  padding: 15px 20px 15px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(31, 42, 70, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.01);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.05);
  }

  ${(props) =>
    props.active &&
    css`
      background: rgba(31, 42, 70, 0.4);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.01);
      box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.05);
    `}
`;

export const Footer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.1);
`;
