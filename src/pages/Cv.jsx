import Top from "../Containers/Top";
import Bottom from "../Containers/Bottom";
import moduleStyle from "../assets/style/cv.module.css";


function Cv() {

    return (

     <div className={moduleStyle.main}>
      <Top/>
      <Bottom/>
     </div>
     
    )
  }

export default Cv;