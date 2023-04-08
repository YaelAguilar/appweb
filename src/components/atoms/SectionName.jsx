import moduleStyle from "../../assets/style/cv.module.css";

function SectionName({section}) {

  return (

    <>
        <p className={moduleStyle.head}>{section}</p>
    </>
  )
}

export default SectionName;
