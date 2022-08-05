import { WrapperProps } from "components/Modal/styles";
import styled, { css } from "styled-components";

export const Container = styled.button<WrapperProps>`
  ${({ theme, danger }) => css`
    height: 52px;
    border: none;
    padding: 0 16px;
    background: ${theme.colors.primary.main};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.white};
    border-radius: 4px;
    transtion: background 0.2s ease-in-out;

    &:hover {
      background: ${theme.colors.primary.light};
    }

    &:active {
      background: ${theme.colors.primary.dark};
    }

    &[disabled] {
      background: ${theme.colors.gray[100]};
      cursor: default;
    }

    ${danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
  `}
`;
