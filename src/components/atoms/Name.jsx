import moduleStyle from "../../assets/style/cv.module.css";
import { data } from "../../data/data";

function Name() {

  return (
    <>
      <p className={moduleStyle.p1}>
        {data.name} <span>{data.lastName}</span>
      </p>
      <p className={moduleStyle.p2}>{data.level}</p>
    </>
  );
}

export default Name;
