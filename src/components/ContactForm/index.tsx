import { FunctionComponent } from "react";
import { Form, ButtonContainer } from "./styles";
import { Button } from "components/Button";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import Select from "components/Select";

interface IContactFormProps {
  buttonLabel: string;
}

const ContactForm: FunctionComponent<IContactFormProps> = ({ buttonLabel }) => {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="button">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
