import { data } from "../../data/data";
import LanguagesSection from "../atoms/LanguagesSection";
import SectionName from "../atoms/SectionName";

function Languages() {

  return (

    <>
      <SectionName section={"Idiomas"}/>
      {data.languages.map((el) => (
        <LanguagesSection lang={el} key={el} />
      ))}
    </>
  );
}

export default Languages;
