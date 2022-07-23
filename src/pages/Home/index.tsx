import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from "./styles";
import { ReactComponent as ArrowSvg } from "assets/arrow.svg";
import { ReactComponent as EditSvg } from "assets/edit.svg";
import { ReactComponent as TrashSvg } from "assets/trash.svg";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span> <ArrowSvg />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instagram</small>
          </div>
          <span>mateus@teste.com.br</span>
          <span>(99) 99999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit/123">
            <EditSvg />
          </Link>
          <button type="button">
            <TrashSvg />
          </button>
        </div>
      </Card>
    </Container>
  );
};
