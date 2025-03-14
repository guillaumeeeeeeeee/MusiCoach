import './App.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import porteecliquable from './Images/portee-cliquable.png';
import HomePage from './Images/home-btn.png';
import Challenges from './Images/Challenge-btn.png';
import Composer from './Images/Composition-btn.png';
import Bibliothèque from './Images/records-btn.png';
import Profil from './Images/profil-btn.png';
import Menu from './Images/Bouton_menu.png';
import Retour from './Images/Retour.png';


function BoutonLecon({ titre, link }) {
  return (
    <div className="theme-btn">
      <a href={link} className="link-theme">
        {titre}
      </a>
    </div>
  );
}

function PaletteLecons() {
  return (
    <div className='theme-grid'>
      <BoutonLecon titre="Thématique 1" link="#C1" />
      <BoutonLecon titre="Thématique 2" link="#C2" />
      <BoutonLecon titre="Thématique 3" link="#C3" />
      <BoutonLecon titre="Thématique 4" link="#C4" />
      <BoutonLecon titre="Thématique 5" link="#C5" />
      <BoutonLecon titre="Thématique 6" link="#C6" />
      <BoutonLecon titre="Thématique 7" link="#C7" />
      <BoutonLecon titre="Thématique 8" link="#C8" />
    </div>
  );
}

function ImageMap({ titre, id }) {
  return (
    <div>
      <div className="section">
        <h1 id={id}>{titre}</h1>
      </div>
      <div className="main-content">
        <img
          src={porteecliquable}
          alt="portee-cliquable"
          useMap="#porteecliquable"
          style={{ display: "block", width: "auto", height: "auto" }} // Utiliser "100%" pour la largeur
        />
        <map name="porteecliquable">
          <area
            shape="circle"
            coords="351,189,23"
            alt="Zone 1"
            href="/UploadLecon"
          />
          <area
            shape="circle"
            coords="568,106,22"
            alt="Zone 2"
            href="/UploadLecon2"
          />
          <area
            shape="circle"
            coords="863,148,26"
            alt="Zone 3"
            href="UploadLecon3"
          />
        </map>
      </div>
    </div>
  );
}

function PalettePortee() {
  return(
    <div className='main-content'>
      <ImageMap titre="Thématique 1" id="C1" />
      <ImageMap titre="Thématique 2" id="C2" />
      <ImageMap titre="Thématique 3" id="C3" />
      <ImageMap titre="Thématique 4" id="C4" />
      <ImageMap titre="Thématique 5" id="C5" />
      <ImageMap titre="Thématique 6" id="C6" />
      <ImageMap titre="Thématique 7" id="C7" />
      <ImageMap titre="Thématique 8" id="C8" />
    </div>
  );
}

function ImageBarre({ image, link, NouvellePage}) {
  return (
    <div>
      <Link to={link}>
        <img className='barre-image'
          src={image} 
          alt={NouvellePage} 
          style={{ cursor: 'pointer' }} 
        />
      </Link>
    </div>
  );
}

function BarreLaterale({ toggleVisibility, isVisible }) {
  return (
    <div className='side-barre'>
      <img
        src={Retour}
        alt="Retour"
        onClick={toggleVisibility}
        className="toggle-button"
      />
      <ImageBarre image={HomePage} link="/PagePrincipale" NouvellePage="PagePrincipale" />
      <ImageBarre image={Challenges} link="https://www.larousse.fr/dictionnaires/francais/challenge/14488" NouvellePage="Challenges" />
      <ImageBarre image={Composer} link="/BoutonLecons" NouvellePage="Composer" />
      <ImageBarre image={Bibliothèque} link="https://www.larousse.fr/dictionnaires/francais/bibliothèque/9064" NouvellePage="Bibliothèque" />
      <ImageBarre image={Profil} link="/PageProfil" NouvellePage="Profil" />
    </div>
  );
}

function ToggleElement() {
  // État pour contrôler la visibilité
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour basculer la visibilité
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="toggle-element">
      {/* Bouton principal */}
      <img
        src={Menu}
        alt="Menu"
        onClick={toggleVisibility}
        className="toggle-button"
      />

      {/* Barre latérale conditionnelle */}
      {isVisible && <BarreLaterale isVisible={isVisible} toggleVisibility={toggleVisibility} />}
    </div>
  );
}


export default function PagePrincipale() {
  return(
    <div className='entire-page'>
      <ToggleElement></ToggleElement>
      <h1 className="titre">Level up</h1>
      <PaletteLecons></PaletteLecons>
      <PalettePortee></PalettePortee>
    </div>
  );
}