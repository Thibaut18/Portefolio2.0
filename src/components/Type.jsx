import Typewriter from "typewriter-effect";
import "../styles/type.scss"

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Développeur",
          "Créateur de Site Web",
          "Passionné par le Code"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;