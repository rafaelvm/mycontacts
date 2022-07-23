import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    margin-bottom: 24px;

    h1 {
      font-size: 24px;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        color: ${theme.colors.primary.main};
        font-weight: bold;
      }

      svg {
        margin-right: 8px;
        transform: rotate(-90deg);
      }
    }
  `}
`;
