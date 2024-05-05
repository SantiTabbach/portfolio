import styled from "styled-components";

export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 16px;
  font-weight: ${({ style }) => style?.fontWeight || 400};
  font-size: ${({ style }) => style?.fontWeight || 16}px;
  color: ${({ theme }) => theme.subtitle};
  transition: color 0.2s ease-in-out;

  .arrow {
    position: absolute;
    left: calc(100% + 5px);
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }

  &:hover {
    transition: color 0.2s ease-in-out;
    color: ${({ theme }) => theme.primary};

    .arrow {
      transform: translateX(3px) translateY(-3px) rotate(-45deg);
    }
  }
`;
