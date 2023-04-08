
import moduleStyle from "../../assets/style/cv.module.css";

function ProfileContact({contact}) {

  return (

    <>
        <p className={moduleStyle.p3}>{contact}</p>
    </>
  )
}

export default ProfileContact;
