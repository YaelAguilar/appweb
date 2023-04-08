import moduleStyle from "../../assets/style/cv.module.css";

function ExpSection ({experience}) {

    return (

        <>
        <p className={moduleStyle}>{experience}</p>
        </>
    )
}

export default ExpSection;