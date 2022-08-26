import { FunctionComponent } from "react";
import { Container } from "./styles";
import { ReactComponent as LogoSvg } from "assets/logo.svg";

const Header: FunctionComponent = () => {
  return (
    <Container>
      <LogoSvg />
    </Container>
  );
};

export default Header;
