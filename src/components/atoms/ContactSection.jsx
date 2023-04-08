import moduleStyle from "../../assets/style/cv.module.css";

function ContactSection({contact}) {

    return (

        <>
            <p className={moduleStyle}>{contact}</p>
        </>
    )
}

export default ContactSection;