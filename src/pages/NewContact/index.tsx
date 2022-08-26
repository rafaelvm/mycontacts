import { FunctionComponent } from "react";
import ContactForm from "components/ContactForm";
import PageHeader from "components/PageHeader";

export const NewContact: FunctionComponent = () => {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
};
