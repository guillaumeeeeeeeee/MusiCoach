import './App.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Logo from './Images/LogoAccueil.png';

function BoutonInscription({ titre, link }) {
    return (
      <div className="inscription-btn">
        <a href={link} className="link-accueil">
          {titre}
        </a>
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
  
  export default function PageAccueil() {
    return(
      <div className='entire-page'>
        <img className='logo-accueil' src={Logo} alt="MusiCoach"/>
        <h1 className='sous-titre' >Apprend à jouer d'un instrument de façon ludique depuis chez toi !</h1>
        <BoutonConnexion titre="Connexion" link="https://www.larousse.fr/dictionnaires/francais/challenge/14488"></BoutonConnexion>
        <BoutonInscription titre="Inscription" link="https://www.larousse.fr/dictionnaires/francais/challenge/14488"></BoutonInscription>
      </div>
    );
  }