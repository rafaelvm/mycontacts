import { Container } from "./styles";
import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type IButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
} & ButtonTypes;

export const Button = ({ children, onClick, ...props }: IButtonProps) => {
  return (
    <Container {...props} onClick={onClick}>
      {children}
    </Container>
  );
};
