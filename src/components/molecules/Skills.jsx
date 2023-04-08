import SkillSection from "../atoms/SkillsSection";
import SectionName from "../atoms/SectionName";
import { data } from "../../data/data";

function Skills() {

  return (

    <>
      <SectionName section={"Skills"} />
      {data.skills.map((skill) => (
        <SkillSection skill={skill} key={skill} />
      ))}
    </>
  );
}

export default Skills;
