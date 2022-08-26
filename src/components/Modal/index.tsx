import { FunctionComponent } from "react";
import { Button } from "components/Button";
import { Container, Footer, Overlay } from "./styles";
import ReactDOM from "react-dom";

export interface IModalProps {
  title?: string;
  content?: string;
  danger?: boolean;
}

const Modal: FunctionComponent<IModalProps> = ({
  title = "Título do modal",
  content = "Conteúdo do modal",
  danger = false,
}) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{content}</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
