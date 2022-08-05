import { Container } from "./styles";
import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type IButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  danger?: boolean;
} & ButtonTypes;

export const Button = ({
  children,
  onClick,
  danger = false,
  ...props
}: IButtonProps) => {
  return (
    <Container {...props} onClick={onClick} danger={danger}>
      {children}
    </Container>
  );
};
