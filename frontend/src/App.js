import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PagePrincipale from './PagePrincipale';
import PageProfil from './PageProfil';
import PageSignUp from "./PageSignUp";
import PageLogIn from "./PageLogIn";
import PageAccueil from './PageAccueil';
import Bouton_leçons from './Bouton_leçons';

function App() {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <nav className="navigation">
          <Link to='/PagePrincipale'> Page Principalel</Link>
          <Link to='/PageProfil'> Profil</Link>
          <Link to='/PageLogIn'> LogIn</Link>
          <Link to='/PageSignUp'> SignUp</Link>
          <Link to='/'>Page Accueil</Link>
          <Link to='/Bouton_leçons'>Bouton_leçons</Link>
        </nav>

        {/* Configuration des routes */}
        <Routes>
          <Route path='/'element={<PageAccueil />} />
          <Route path='/PagePrincipale'element={<PagePrincipale />} />
          <Route path='/PageProfil' element={<PageProfil />} />
          <Route path='/PageLogIn' element={<PageLogIn />} />
          <Route path='/PageSignUp' element={<PageSignUp />} />
          <Route path='/Bouton_leçons' element={<Bouton_leçons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;