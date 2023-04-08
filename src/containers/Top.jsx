import React from "react";
import moduleStyle from "../assets/style/cv.module.css";
import Contact from "../components/molecules/Contact";
import Skills from "../components/molecules/Skills";
import Languages from "../components/molecules/Languages";
import HeadProfile from "../components/molecules/HeadProfile";

function Top() {

    return (

      <div>
          <HeadProfile/>
          <div className={moduleStyle.clearfix}></div>
        
          <div className={moduleStyle.colDiv4}>
              <div className={moduleStyle.contentBox}>
                  <Contact/>
                  <Skills/>
                  <Languages/>
              </div>
          </div>
      </div>
    )
  }

export default Top;
  