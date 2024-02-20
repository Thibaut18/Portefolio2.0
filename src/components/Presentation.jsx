import aboutImg from "../assets/Images/aboutImg.png"
import '../styles/presentation.scss'

function Presentation () {
    return (
        <section className="presentation-section">
            <div className="presentation-section-h1-txt">
        <h1>Qui <span className="span-word">suis-je ?</span></h1>
        <p className="about-section-txt">
					Passionné par le monde du <span className="span-word">numérique</span> et <span className="span-word">multimédia</span> depuis
					l&apos;enfance, il n&apos;y a pas pour moi de métier plus stimulant
					que celui de <span className="span-word">développeur web</span>.{" "}
				</p>
				<p className="about-section-txt">
					Actuellement spécialisé dans le <span className="span-word">développement front-end</span> avec des
					technologies comme <span className="span-word">React/Javascript</span>, je compte travailler dur dans le
					but de devenir un développeur <span className="span-word">full-stack</span> chevronné !
				</p>
				<p className="about-section-txt">
					Diplômé d&apos;un <span className="span-word">bac+2</span> Techniques de commercialisation et ayant
					obtenu ma première année en fac de psychologie, c&apos;est donc une 
					<span className="span-word"> reconversion</span> totale que j&apos;ai pu réaliser grâce à <span className="span-word">OpenClassRooms</span>,
					ce qui est pour moi une <span className="span-word">chance</span> exceptionnelle.
				</p>
				<p className="about-section-txt">
					D&apos;un naturel <span className="span-word">perfectionniste</span>, d&apos;autant plus lorsque cela
					concerne la <span className="span-word">technologie</span>, je donnerai le meilleur de moi-même si vous
					décidez de me faire confiance pour la réalisation de l&apos;un de vos
					projets.
				</p>
        </div>
<img src={aboutImg} alt="Représentation d'un développeur" className="presentation-section-img" />
</section>
    ); 
}

export default Presentation