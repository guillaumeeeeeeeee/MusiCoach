import './App.css';
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
      <div className='section'>
        <h1 id={id}>{titre}</h1>
      </div>
      <div className='main-content'>
        <img
          src={porteecliquable}
          alt="portee-cliquable"
          useMap="#porteecliquable"
          style={{ display: 'block', width: 'auto', height: 'auto' }}
        />
        <map name="porteecliquable">
          <area
            shape="circle"
            coords="433,265,21"
            alt="Zone 1"
            href="https://www.apprendrelesolfege.com/clef-de-sol"
            target="_blank"
          />
          <area
            shape="circle"
            coords="694, 154, 23"
            alt="Zone 2"
            href="https://www.apprendrelesolfege.com/clef-de-fa"
            target="_blank"
          />
          <area
            shape="circle"
            coords="1042, 208, 25"
            alt="Zone 3"
            href="https://www.apprendrelesolfege.com/clef-d-ut"
            target="_blank"
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
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className='barre-image'
          src={image} 
          alt={NouvellePage} 
          style={{ cursor: 'pointer' }} 
        />
      </a>
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
      <ImageBarre image={HomePage} link="https://www.larousse.fr/dictionnaires/francais/accueil/569" NouvellePage="HomePage" />
      <ImageBarre image={Challenges} link="https://www.larousse.fr/dictionnaires/francais/challenge/14488" NouvellePage="Challenges" />
      <ImageBarre image={Composer} link="https://www.larousse.fr/dictionnaires/francais/composer/17742" NouvellePage="Composer" />
      <ImageBarre image={Bibliothèque} link="https://www.larousse.fr/dictionnaires/francais/bibliothèque/9064" NouvellePage="Bibliothèque" />
      <ImageBarre image={Profil} link="https://www.larousse.fr/dictionnaires/francais/profil/64166" NouvellePage="Profil" />
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


export default function Accueil() {
  return(
    <div className='entire-page'>
      <ToggleElement></ToggleElement>
      <h1 className="titre">Level up</h1>
      <PaletteLecons></PaletteLecons>
      <PalettePortee></PalettePortee>
    </div>
  );
}
