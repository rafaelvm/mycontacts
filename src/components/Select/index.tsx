import styled, { css } from "styled-components";

export default styled.select`
  ${({ theme }) => css`
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
  `}
`;
