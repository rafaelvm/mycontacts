import { FunctionComponent, useState } from "react";
import { Form, ButtonContainer } from "./styles";
import { Button } from "components/Button";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import Select from "components/Select";
import isEmailValid from "utils/isEmailValid";

interface IContactFormProps {
  buttonLabel: string;
}

const ContactForm: FunctionComponent<IContactFormProps> = ({ buttonLabel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevtState) => [
        ...prevtState,
        { field: "name", message: "Nome é obrigatório." },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== "name")
      );
    }
  };

  console.log(errors);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === "email"
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevtState) => [
        ...prevtState,
        { field: "email", message: "E-mail inválido ." },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== "email")
      );
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Nome" value={name} onChange={handleNameChange} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" value={email} onChange={handleEmailChange} />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option disabled value="">
            Categoria
          </option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="button">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
