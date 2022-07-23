import ContactForm from "components/ContactForm";
import PageHeader from "components/PageHeader";

export const NewContact: React.FC = () => {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
};
