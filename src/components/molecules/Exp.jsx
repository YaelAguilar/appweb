import SectionName from "../atoms/SectionName";
import ExpSection from "../atoms/ExpSection";

function Exp() {

  return (

    <>
      <SectionName section={"Experiencia"} />
      {data.experience.map((exp) => (
        <ExpSection key={exp} experience={exp} />
      ))}
    </>
  );
}

export default Exp;
