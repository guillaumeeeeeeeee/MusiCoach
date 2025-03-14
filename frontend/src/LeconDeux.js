import './App.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './Images/home-btn.png';
import Challenges from './Images/Challenge-btn.png';
import Composer from './Images/Composition-btn.png';
import Bibliothèque from './Images/records-btn.png';
import Profil from './Images/profil-btn.png';
import Menu from './Images/Bouton_menu.png';
import Retour from './Images/Retour.png';
import Avignon from './Images/avignon.png';


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

  function Partition() {
    return (
      <div>
        <img src={Avignon} alt="partition" className='partition' />
      </div>
    );
  }

  function BoutonConnexion({ titre, link }) {
    return (
      <div className="connexion-btn">
        <a href={link} className="link-accueil">
          {titre}
        </a>
      </div>
    );
  }


  export default function PageProfil() {
    return(
      <div className='entire-page'>
        <ToggleElement></ToggleElement>
        <h1 className="titre">Sur le pont d'Avignon</h1>
        <Partition></Partition>
        <BoutonConnexion titre="Vérification" link="/UploadLecon"></BoutonConnexion>
      </div>
    );
  }