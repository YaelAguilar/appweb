
import SectionName from "../atoms/SectionName";
import ContactSection from "../atoms/ContactSection";

function Contact() {

  return (

    <div>
      <SectionName section={"Contacto"} />
      {data.contact.map((cont) => (
        <ContactSection key={cont} contact={cont}/>
      ))}
    </div>
  );
}

export default Contact;
