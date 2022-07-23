import { Container } from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "assets/arrow.svg";

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Link to="/">
        <ArrowSvg />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
};

export default PageHeader;
