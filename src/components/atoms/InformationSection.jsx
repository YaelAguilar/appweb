import moduleStyle from "../../assets/style/cv.module.css";

function InformationContact({information}) {

  return (

    <>
        <p className={moduleStyle}>{information}</p>
    </>
  )
}

export default InformationContact;
