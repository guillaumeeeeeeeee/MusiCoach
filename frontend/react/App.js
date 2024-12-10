import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PagePrincipale from './PagePrincipale';
import PageProfil from './PageProfil';
import PageSignUp from "./PageSignUp";
import PageLogIn from "./PageLogIn";
import PageAccueil from './PageAccueil';

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
        </nav>

        {/* Configuration des routes */}
        <Routes>
          <Route path='/'element={<PageAccueil />} />
          <Route path='/PagePrincipale'element={<PagePrincipale />} />
          <Route path='/PageProfil' element={<PageProfil />} />
          <Route path='/PageLogIn' element={<PageLogIn />} />
          <Route path='/PageSignUp' element={<PageSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;