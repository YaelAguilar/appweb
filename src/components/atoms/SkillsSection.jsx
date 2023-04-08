
function SkillSection({skill}) {

    return (
  
      <>
        <ul className={moduleStyle.skills}>
          <li key={skill}>
            <span>{skill}</span>
          </li>
        </ul>
      </>
    )
  }
  
  export default SkillSection;
  