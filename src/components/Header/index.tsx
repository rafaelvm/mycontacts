import { Container } from "./styles";

import { ReactComponent as LogoSvg } from "assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoSvg />
    </Container>
  );
};

export default Header;
