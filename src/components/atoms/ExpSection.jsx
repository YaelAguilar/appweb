
import moduleStyle from "../../assets/style/cv.module.css";

function ExpSection({experience}) {

  return (

    <>
    <p className={moduleStyle.p3}>{experience}</p>
    </>
  )
}

export default ExpSection;
