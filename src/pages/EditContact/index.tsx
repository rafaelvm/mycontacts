import { FunctionComponent } from "react";
import ContactForm from "components/ContactForm";
import PageHeader from "components/PageHeader";

export const EditContact: FunctionComponent = () => {
  return (
    <>
      <PageHeader title="Editar" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
};
