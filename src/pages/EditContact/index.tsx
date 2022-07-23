import ContactForm from "components/ContactForm";
import PageHeader from "components/PageHeader";

export const EditContact: React.FC = () => {
  return (
    <>
      <PageHeader title="Editar" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
};
