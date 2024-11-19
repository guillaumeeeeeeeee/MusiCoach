import './App.css';
import { useState } from 'react';
import HomePage from './Images/home-btn.png';
import Challenges from './Images/Challenge-btn.png';
import Composer from './Images/Composition-btn.png';
import Bibliothèque from './Images/records-btn.png';
import Profil from './Images/profil-btn.png';
import Menu from './Images/Bouton_menu.png';
import Retour from './Images/Retour.png';
import ProfileCard from './Images/ProfileCard.png';

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

  export default function ProfilePage() {
    return(
      <div className='entire-page'>
        <ToggleElement></ToggleElement>
        <h1 className="titre">Profil</h1>
      </div>
    );
  }