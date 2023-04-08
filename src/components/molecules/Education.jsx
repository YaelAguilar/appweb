import SectionName from "../atoms/SectionName";
import EducationSection from "../atoms/EducationSection";
import { data } from "../../data/data";

function Education() {

  return (

    <>
      <SectionName section={"Educación"} />
      {data.schools.map((school) => (
        <EducationSection key={school} school={school}/>
      ))}
    </>
  );
}

export default Education;