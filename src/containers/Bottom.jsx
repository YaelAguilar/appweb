import Profile from "../components/molecules/Profile";
import Exp from "../components/molecules/Exp";
import Education from "../components/molecules/Education";
import moduleStyle from "../assets/style/cv.module.css";

function Bottom() {

    return (

      <div>
        <div className={moduleStyle.line}></div>
        <div className={moduleStyle.colDiv8}>
          <div className={moduleStyle.contentBox}>
            <Profile/>
            <Exp/>
            <Education/>
          </div>
        </div>
        <div className={moduleStyle.clearfix}></div>
  
      </div>
    )
  }

export default Bottom;
  