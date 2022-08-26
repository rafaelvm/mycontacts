import { FunctionComponent } from "react";
import { Container } from "./styles";

const FormGroup: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormGroup;
