import Type from "../components/Type"
import homeImg from "../assets/Images/homeImg.svg"
import "../styles/home.scss"

function Home () {
    return (
        <section className="intro-section">
            <div className="intro-section-type-container">
        <Type/>
        </div>
        <img src={homeImg} alt="Coding Man" className="intro-section-img" />
        </section>
    );
}
export default Home