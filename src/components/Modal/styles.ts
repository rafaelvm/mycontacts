import styled, { css } from "styled-components";
import { IModalProps } from ".";

export type WrapperProps = Pick<IModalProps, "danger">;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<WrapperProps>`
  ${({ theme, danger }) => css`
    width: 100%;
    max-width: 450px;
    background-color: ${theme.colors.white};
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    h1 {
      font-size: 22px;
      color: ${theme.colors.gray[900]};

      ${danger &&
      css`
        color: ${theme.colors.danger.main};
      `};
    }

    p {
      margin-top: 8px;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button {
      background: transparent;
      border: none;
      font-size: 16px;
      margin-right: 8px;
      color: ${theme.colors.gray[200]};
    }
  `}
`;
