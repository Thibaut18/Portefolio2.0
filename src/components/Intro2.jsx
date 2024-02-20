import meCoding from "../assets/Images/meCoding.webp"
import "../styles/intro2.scss"

function Intro2 () {
    return (
        <section className="intro2-section">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tortor massa. Vestibulum dapibus neque non magna congue suscipit a ut purus. Phasellus pretium tincidunt diam eu congue. Nullam non malesuada lectus, sit amet facilisis tortor. Mauris condimentum aliquam odio. Pellentesque luctus, libero nec vehicula commodo, est diam congue nisi, eget tristique est metus ac felis. Maecenas accumsan sed lorem in mattis. Morbi bibendum mollis tempus. Ut metus tellus, rhoncus at turpis quis, fermentum efficitur sapien. Praesent gravida metus non velit euismod malesuada. Suspendisse molestie faucibus tortor nec facilisis. Proin in consectetur ex, sit amet pretium risus. Donec varius massa vel nibh egestas porttitor.
            <img src="https://media.tenor.com/lZE8tZGKLQ4AAAAi/saturn-v-space.gif"/>

</p>
<div className="intro2-coding-pic">
<img src={meCoding} alt="Le créateur de se portefolio en train de développer"/>
</div>
</section>
    );
}

export default Intro2