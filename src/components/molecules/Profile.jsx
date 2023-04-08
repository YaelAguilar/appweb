import SectionName from "../atoms/SectionName";
import { data } from "../../data/data";
import moduleStyle from "../../assets/style/cv.module.css";

function Profile() {

  return (

    <>
      <SectionName section={"Perfil"}/>
      <p className={moduleStyle.p3}>{data.description}</p>
    </>
  );
}

export default Profile;
