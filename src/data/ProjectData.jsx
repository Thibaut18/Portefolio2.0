import portefolioPic from '../assets/Images/projectsPic/portefolioPic.webp'
import eventsPic from '../assets/Images/projectsPic/eventsPic.webp';
import omfPic from '../assets/Images/projectsPic/omfPic.webp';
import kasaPic from '../assets/Images/projectsPic/kasaPic.webp';
import sbPic from '../assets/Images/projectsPic/sbPic.webp';
import printitPic from '../assets/Images/projectsPic/printitPic.webp';
import bookiPic from '../assets/Images/projectsPic/bookiPic.webp';
import ninaPic from '../assets/Images/projectsPic/ninaPic.webp';
import abPic from '../assets/Images/projectsPic/abPic.webp';

const projectData = [
  {
    title: "Portefolio",
    subtitle: "Premier Portefolio fait avec React/JS",
    imgSrc: portefolioPic,
    alt: "Projet portefolio",
    repoUrl: "https://github.com/Thibaut18/Portfolio",
    demoUrl: "https://thibautteinturier.netlify.app/homepage"
  },
  {
    title:"ArgentBank :",
					subtitle:"Création du site ArgentBank en React/JS, state management via Redux, gestion de la connexion utilisateur et modification du profil en lien avec une base de données gérée via MongoDB, création d'un fichier Swagger en .YAML ",
					imgSrc:abPic,
					alt:"Projet Argent Bank",
					repoUrl:"https://github.com/Thibaut18/ArgentBank-website"
  },
  {
    title: "724 Events",
    subtitle: "Débug d'une application en React/JS",
    imgSrc: eventsPic,
    alt: "Projet Débug 724Events",
    repoUrl: "https://github.com/Thibaut18/P-10_Debug"
  },
  {
    title: "OhMyFood! :",
    imgSrc: omfPic,
    alt: "Projet OhMyFood",
    repoUrl: "https://github.com/Thibaut18/Projet-4-OC",
    subtitle: "Création d'un site en mobile first répértoriant les menus de restaurants gastronomiques (plusieurs animations CSS faites main dont le loader)",
    demoUrl: "https://thibaut18.github.io/Projet-4-OC/index.html"
  },
  {
    title: "Kasa :",
    imgSrc: kasaPic,
    alt: "Projet Kasa",
    repoUrl: "https://github.com/Thibaut18/Projet-8_Kasa",
    subtitle: "Création d'une application web de location immobilière avec React/JS (affichage dynamique des informations de location)"
  },
  {
    title: "Portefolio - Sophie Bluel :",
    imgSrc: sbPic,
    alt: "Projet Portefolio Sophie Bluel",
    repoUrl: "https://github.com/Thibaut18/Projet-6_Creez-une-page-web-dynamique-avec-javascript",
    subtitle: "Affichage dynamique en JavaScript des projets de l'architecte, gestion de la connexion utilisateur et de l'affichage admin une fois connecté, possibilité d'ajouter ou supprimer des projets via une modale"
  },
  {
    title: "Print-It :",
    imgSrc: printitPic,
    alt: "Projet Print-It",
    repoUrl: "https://github.com/Thibaut18/P5_Print-It",
    subtitle: "Création d'un caroussel en JavaScript",
    demoUrl: "https://thibaut18.github.io/P5_Print-It/"
  },
  {
    title: "Booki :",
    imgSrc: bookiPic,
    alt: "Projet Booki",
    repoUrl: "https://github.com/Thibaut18/Projet-3",
    subtitle: "Création de la page d'accueil d'une agence de voyage en HTML/CSS",
    demoUrl: "https://thibaut18.github.io/"
  },
  {
    title: "Portefolio - Nina Carducci :",
    imgSrc: ninaPic,
    alt: "Projet Portefolio Nina Carducci",
    repoUrl: "https://github.com/Thibaut18/Opti-SEO",
    subtitle: "Optimisation SEO d'un site portefolio avec l'utilisation d'outils comme Wave/Lighthouse",
    demoUrl:"https://thibaut18.github.io/Opti-SEO/"
  }
];

export default projectData