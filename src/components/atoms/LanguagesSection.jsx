import moduleStyle from "../../assets/style/cv.module.css";

function LanguagesSection ({lang}) {

    return (

        <>
        <p className={moduleStyle}>{lang}</p>
        </>
    )
}

export default LanguagesSection;