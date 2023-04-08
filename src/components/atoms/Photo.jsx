import moduleStyle from "../../assets/style/cv.module.css";
import img from "../../assets/img/yael.jpeg";

function Photo() {

  return (

   <>
    <img src={img} className={moduleStyle.profile}/>
   </>
  );
}

export default Photo;