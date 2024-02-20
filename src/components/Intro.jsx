import Type from "../components/Type"
import homeImg from "../assets/Images/homeImg.svg"
import "../styles/intro.scss"

function Intro () {
    return (
        <section className="intro-section">
            <div className="intro-section-presentation">
            <h1 className="intro-section-presentation-hello">Hello There ! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
            <p>Je suis <span className="span-word">Thibaut Teinturier</span></p>
            <div className="intro-section-type-container">
        <Type/>
        </div>
        </div>
        <img src={homeImg} alt="Coding Man" className="intro-section-img" />
        </section>
    );
}
export default Intro