import { FunctionComponent, useState } from "react";
import { Form, ButtonContainer } from "./styles";
import { Button } from "components/Button";
import { useErrors } from "hooks/useErrors";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import Select from "components/Select";
import isEmailValid from "utils/isEmailValid";
import formatPhone from "utils/formatPhone";

interface IContactFormProps {
  buttonLabel: string;
}

const ContactForm: FunctionComponent<IContactFormProps> = ({ buttonLabel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório." });
    } else {
      removeError("name");
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail inválido." });
    } else {
      removeError("email");
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isFormValid = name && email && errors.length;

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName("name")}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName("email")}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
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
        <Button type="button" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
