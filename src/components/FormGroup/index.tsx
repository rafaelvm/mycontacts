import { FunctionComponent } from "react";
import { Container } from "./styles";

interface IFormGroupProps {
  error?: string;
}

const FormGroup: FunctionComponent<IFormGroupProps> = ({
  children,
  error = null,
}) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
