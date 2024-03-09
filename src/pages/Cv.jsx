import monCv from "../assets/Images/monCv.webp"
import "../styles/cv.scss"

function Cv () {
    return (
        <section className="cv-section">
            <a
					className="cv-btn-link cv-btn-link-none"
					href="https://drive.google.com/file/d/1vuz53VAEHepLoU6LvCBpryqSArDVbXEk/view?usp=drive_link"
					target="_blank"
					rel="noreferrer"
				>
					<button type="button" className="cv-btn cv-btn-link-none">
						Télécharger 
					</button>
				</a>
        <img src={monCv} className="cv-section-img" alt="Mon Cv"/>
        <a
					className="cv-btn-link"
					href="https://drive.google.com/file/d/1vuz53VAEHepLoU6LvCBpryqSArDVbXEk/view?usp=drive_link"
					target="_blank"
					rel="noreferrer"
				>
					<button type="button" className="cv-btn">
						Télécharger 
					</button>
				</a>
        </section>
    );
}

export default Cv