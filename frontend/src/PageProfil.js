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
import ProfileCard from './Images/ProfileCard.png';

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

  function InfoProfil({ prenom, nom, username, datenaissance, pays, mail, telephone }) {
    return (
      <div className="image-fond-profil">
        <img src={ProfileCard} alt="Cadre" className="background-profil" />
        <div className="texte-profil">
          <h1 className="nom-profil">{prenom}</h1>
          <p className="nom-profil">{nom}</p>
          <br />
          <br />
          <p className="info-profil">{username}</p>
          <p className="info-profil">{datenaissance}</p>
          <p className="info-profil">{pays}</p>
          <p className="info-profil">{mail}</p>
          <p className="info-profil">{telephone}</p>
        </div>
      </div>
    );
  }


  export default function PageProfil() {
    return(
      <div className='entire-page'>
        <ToggleElement></ToggleElement>
        <h1 className="titre">Mon Profil</h1>
        <InfoProfil nom="Maroni" prenom="Isée" username="isée.maroni" datenaissance="01/01/2000" pays="France" mail="isée.maroni@gmail.com" telephone="+33 7 68 12 53 21" />
      </div>
    );
  }