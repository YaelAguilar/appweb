import SectionName from "../atoms/SectionName";
import ContactSection from "../atoms/ContactSection";
import { data } from "../../data/data";

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
