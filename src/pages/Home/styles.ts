import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    input {
      width: 100%;
      background: ${theme.colors.white};
      border: none;
      border-radius: 25px;
      height: 50px;
      box-shadow: (0px 4px 10px rgba(0, 0, 0, 0.04));
      outline: 0;
      padding: 0 16px;

      &::placeholder {
        color: #bcbcbc;
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

    strong {
      color: ${theme.colors.gray[900]};
      font-size: 24px;
    }

    a {
      color: ${theme.colors.primary.main};
      text-decoration: none;
      font-weight: bold;
      border: 2px solid ${theme.colors.primary.main};
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: ${theme.colors.primary.main};
        color: ${theme.colors.white};
      }
    }
  `}
`;

export const ListContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 24px;

    header {
      margin-bottom: 8px;
      button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;

        span {
          margin-right: 8px;
          font-weight: bold;
          color: ${theme.colors.primary.main};
        }
      }
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: (0px 4px 10px rgba(0, 0, 0, 0.04));
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
      margin-top: 16px;
    }

    .info {
      .contact-name {
        display: flex;
        align-items: center;
        gap: 8px;

        small {
          background: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
          font-weight: bold;
          text-transform: uppercase;
          padding: 4px;
          border-radius: 4px;
        }
      }

      span {
        display: block;
        font-size: 14px;
        color: ${theme.colors.gray[200]};
      }
    }

    .actions {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: none;
        margin-left: 8px;
      }
    }
  `}
`;
