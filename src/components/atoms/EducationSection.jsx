import moduleStyle from "../../assets/style/cv.module.css";

function EducationSection({school}) {

    return (
  
      <>
          <p className={moduleStyle}>{school}</p>
      </>
    )
  }
  
  export default EducationSection;