import Photo from "../atoms/Photo";
import Name from "../atoms/Name";
import moduleStyle from "../../assets/style/cv.module.css";

function HeadProfile() {

  return (

    <div className={moduleStyle.topSection}>
      <Photo/>
      <Name/>
    </div>
  );
}

export default HeadProfile;
