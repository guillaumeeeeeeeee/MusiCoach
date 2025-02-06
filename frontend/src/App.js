import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PagePrincipale from './PagePrincipale';
import PageProfil from './PageProfil';
import PageSignUp from "./PageSignUp";
import PageLogIn from "./PageLogIn";
import PageAccueil from './PageAccueil';
import BoutonLecons from './BoutonLecons';
import UploadLecon from './UploadLecon' ;
import LeconDodo from './LeconDodo' ;
import LeconDeux from './LeconDeux' ;
import LeconTrois from './LeconTrois' ;

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
          <Link to='/BoutonLecons'>BoutonLecons</Link>
          <Link to='/UploadLecon'>UploadLecon</Link>
          <Link to='/LeconDodo'>LeconDodo</Link>
          <Link to='/LeconDeux'>LeconDeux</Link>
          <Link to='/LeconTrois'>LeconTrois</Link>
        </nav>

        {/* Configuration des routes */}
        <Routes>
          <Route path='/'element={<PageAccueil />} />
          <Route path='/PagePrincipale'element={<PagePrincipale />} />
          <Route path='/PageProfil' element={<PageProfil />} />
          <Route path='/PageLogIn' element={<PageLogIn />} />
          <Route path='/PageSignUp' element={<PageSignUp />} />
          <Route path='/BoutonLecons' element={<BoutonLecons />} />
          <Route path='/UploadLecon' element={<UploadLecon />} />
          <Route path='/LeconDodo' element={<LeconDodo />} />
          <Route path='/LeconDeux' element={<LeconDeux />} />
          <Route path='/LeconTrois' element={<LeconTrois />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;