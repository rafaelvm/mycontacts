import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    & + & {
      margin-top: 16px;
    }

    small {
      color: ${theme.colors.danger.main};
      font-size: 12px;
      display: block;
      margin-top: 8px;
    }
  `}
`;
