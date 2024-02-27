import {
    AiFillGithub,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
import '../styles/footer.scss'

function Footer () {
    return (
        <footer className="footer">
             <a
                  href="https://www.linkedin.com/in/thibaut-teinturier-077b87174/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icons"
                >
                  <FaLinkedinIn className="footer-icon"/>
                </a>
                <div className="footer-txt">
        <p>Copyright 2024 ©</p>
			<p>
				Teinturier Thibaut
                </p>
                </div>
				<a
					href="https://github.com/Thibaut18"
					target="_blank"
					aria-label="Icone GitHub"
					rel="noopener noreferrer"
                    className="footer-social-icons"
				>
					<AiFillGithub className="footer-icon"/>
				</a>
        </footer>
    );
}

export default Footer;