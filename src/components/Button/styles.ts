import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 52px;
    border: none;
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
  `}
`;
