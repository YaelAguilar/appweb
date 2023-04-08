
import moduleStyle from "../../assets/style/cv.module.css";

function LanguagesSection ({lang}) {

  return (

    <>
    <p className={moduleStyle.p3}>{lang}</p>
    </>
  )
}

export default LanguagesSection;
