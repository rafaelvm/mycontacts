import styled, { css } from "styled-components";

interface InputProps {
  error?: boolean;
}

export default styled.input<InputProps>`
  ${({ theme, error }) => css`
    width: 100%;
    background: ${theme.colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border: 2px solid ${theme.colors.white};
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: ${theme.colors.primary.main};
    }

    ${error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `};
  `}
`;
